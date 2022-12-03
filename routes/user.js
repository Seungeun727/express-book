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
    return res.status(400).json({ message: err.message, signMessage: { errorMsg: "회원가입에 실패했습니다.", status: false }});
  }
});


router.get('/register/:id', async(req, res, next) => {
  let status = true;
  const connection = await pool.getConnection(async conn => conn);
  try {
    if(userId === "undefined" || userId === "null") {
      console.log('아이디의 형식이 일치하게 5-20자로 작성해주세요.');
      return false;
    } else if(userId.length === 0 || userId.length < 5 || userId.length > 20 ) {  
      console.log('아이디는 5-20자로 작성해주세요.');
      return false;
    } else {
      const sql = `SELECT user_id FROM users WHERE user_id = ?`;
      const [result] = await connection.query(sql, userId);
      if(result.length !== 0 && (userId === result[0].user_id)) {
        connection.release();
        status = false;
        console.log("중복된 아이디입니다.");
        res.status(409).json({ status });
      } else {
        connection.release();
        console.log("중복된 아이디가 아닙니다.");
        res.status(200).json({ status });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message, status});
    connection.release();
  }
});

module.exports = router;