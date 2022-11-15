const express = require('express');
const router = express.Router();
const pool = require('../db/index');

router.post('/register', async(req, res, next) => {
  const connection = await pool.getConnection(async conn => conn);
  try {
    let errorMessage = '';
    let success = false;
    const { name, email, id, password, passwordCheck } = req.body;
    const values = [ 
      id,
      name,
      password,
      email,
    ];

    if(password !== passwordCheck) {
      success = false;
      errorMessage = '비밀번호가 일치하지 않습니다.';
      return res.status(400).json({ errorMessage , success });
    } else {
      success = true;
      const sql = `INSERT INTO users (user_id, user_name, user_password, user_email) VALUES (?, ?, ?, ?)`;
      await connection.query(sql, values);
      await connection.commit();
      connection.release();
      return res.status(201).json({ successMessage: '회원가입에 성공했습니다.', success});
    }
  } catch(err) {
    connection.release();
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;