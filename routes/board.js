const express = require('express');
const router = express.Router();
const pool = require('../db/index');

router.get('/', async(req, res, next) => {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const sql = 'SELECT * FROM board';
    let [result] = await connection.query(sql);
    res.send(result);
    connection.release();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/write/:id', async(req, res, next) => {
  const id = req.params.id;
  const { title, author, text } = req.body; 
  
  const connection = await pool.getConnection(async conn => conn);
  
  try {
    const sql = `INSERT INTO board(user_name, board_title, board_author, createdAt, board_text) values(?, ?, ?, ?, ?)`;
    const values =  [
      id, 
      title,
      author,
      '2022-10-25', 
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

module.exports = router;