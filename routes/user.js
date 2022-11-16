const express = require('express');
const router = express.Router();
const pool = require('../db/index');
const bcrypt = require('bcrypt');

router.post('/register', async(req, res, next) => {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const { name, email, id, passwordCheck } = req.body;
    let plaintextPassword = req.body.password;
  
    if(plaintextPassword === passwordCheck) {
      const saltRounds = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
      
      const sql = `INSERT INTO users (user_id, user_name, user_password, user_email) VALUES (?, ?, ?, ?)`;
      const values = [ id, name, encryptedPassword, email];
      
      await connection.query(sql, values); 
      await connection.commit();
      connection.release();
      return res.status(201).json({ successMsg: '회원가입에 성공했습니다.', status: true});
    } else {
      return res.status(400).json({ errorMsg: "비밀번호가 일치하지 않습니다.", status: false });
    }
  } catch(err) {
    connection.release();
    return res.status(400).json({ message: err.message, signMessage: { errorMsg: "회원가입에 실패했습니다.", status: false }});
  }
});

module.exports = router;