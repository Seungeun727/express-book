const express = require('express');
const router = express.Router();
const pool = require('../db/index');
const { verifyToken }= require('../middlewares/auth');
const controllers = require('../controllers/boardController');

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
    const totalPostCount = totalPost.length;
    let [posts] = await connection.query(sql2);

    const pageInfo = { totalPostCount, totalPage };
    res.send({ posts, pageInfo });
    connection.release();
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/:id', controllers.detailBoard);
router.post('/write', verifyToken, controllers.boardWrite);
router.post('/update/:id', verifyToken, controllers.boardUpdate);
router.post('/delete/:id', verifyToken, controllers.boardDelete);

module.exports = router;