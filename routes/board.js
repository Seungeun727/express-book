const express = require('express');
const router = express.Router();
const pool = require('../db/index');

router.get('/', async(req, res, next) => {
  try {
    let connection = await pool.getConnection(async conn => conn);
    const sql = 'SELECT * FROM board';
    let [result] = await connection.query(sql);
    res.send(result);
    connection.release();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;