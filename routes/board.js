const express = require('express');
const router = express.Router();
const pool = require('../db/index');

router.get('/', async(req, res, next) => {
  const connection = await pool.getConnection(async conn => conn);

  let currentPage = parseInt(req.query.currentPage || 1);
  let pageSize = parseInt(req.query.perPage || 10); 
  let offset = (currentPage >= 2) ? Math.abs(currentPage - 1) * pageSize: currentPage - 1;
  let limit = pageSize;
      
  try {
    const sql = `SELECT * FROM board`;
    const sql2 = `SELECT * FROM board LIMIT ${offset}, ${limit}`;
    let [totalPost] = await connection.query(sql);

    const totalPage = Math.ceil(totalPost.length / pageSize);
    
    let [posts] = await connection.query(sql2);
    res.send({ posts, totalPage });
    connection.release();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res, next) => {
  const postId = req.params.id;  
  const connection = await pool.getConnection(async conn => conn);
  try {
    const sql = `SELECT * FROM board WHERE board_no = ?`;
    let [result] = await connection.query(sql, postId);
    res.json(result);
    connection.release();
  } catch (err) {
    console.log('Query Error');
    res.status(500).send({message: err.message});
  }
});

router.post('/write/:id', async(req, res, next) => {
  const id = req.params.id;
  const { title, author, text } = req.body; 
  
  const connection = await pool.getConnection(async conn => conn);
  const date = new Date();
  try {
    const sql = `INSERT INTO board(user_name, board_title, board_author, createdAt, board_text) values(?, ?, ?, ?, ?)`;
    const values =  [
      id, 
      title,
      author,
      date, 
      text
    ];
  
    let [result] = await connection.query(sql,values);
    console.log(values);
    res.json(result);
    connection.release();
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});


router.post('/update/:id', async(req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, text } = req.body; 
  
  console.log(typeof id);
  const connection = await pool.getConnection(async conn => conn);
  const date = new Date();
  try {
    const sql = 'UPDATE board SET board_title =?, createdAt=?, board_text =? WHERE board_no =?';
    const values =  [
      title,
      date,
      text,
      id, 
    ];
  
    let [result] = await connection.query(sql,values);
    res.json(result);
    connection.release();
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});


router.post('/delete/:id', async(req, res, next) => {
  const postId = parseInt(req.params.id);
  
  console.log(typeof postId);
  const connection = await pool.getConnection(async conn => conn);
  try {
    const sql = 'DELETE FROM board WHERE board_no = ?';
  
    let [result] = await connection.query(sql, postId);
    res.json(result);
    connection.release();
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});
module.exports = router;