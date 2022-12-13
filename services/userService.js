const pool = require('../db/index');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwt');

module.exports = {
  register: async (userData) => {
    const { id, name, email, password } = userData;
    try {
      const connection = await pool.getConnection(async conn => conn);  
  
      const saltRounds = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, saltRounds);
        
      const values = [ id, name, encryptedPassword, email];
      const sql = `INSERT INTO users (user_id, user_name, user_password, user_email) VALUES (?, ?, ?, ?)`;
      const result = await connection.query(sql, values);
      connection.release();
      return { status: true, data: result[0] };
    } catch (err) {
      return { status: false, message: err.message };
    }
  },
  duplicateUser: async(userId) => {
    try {
      const connection = await pool.getConnection(async conn => conn);
      const sql = `SELECT user_id FROM users WHERE user_id = ?`;
      const [result] = await connection.query(sql, userId);
      connection.release();
      if(result.length !== 0 && (userId === result[0].user_id)) {
        return { status: false };
      } else {
        return { status: true };
      }
    } catch (err) {
      return { status: false, message: err };
    }
  },
  loginUser: async(user_id, user_password) => {
    try {
      const connection = await pool.getConnection(async conn => conn);
      let sql = `SELECT user_name, user_password FROM users WHERE user_id = ?`;
      const [rows] = await connection.query(sql, user_id);
      connection.release(); 
      const encryptedPassword = rows[0].user_password;
      const matchPassword = bcrypt.compareSync(user_password, encryptedPassword);
      if(matchPassword) {
        const access_token = createToken(user_id);
        const userInfo = { user_id };
        return { status: true, data: { userInfo, access_token }};
      } else {
        return { status: false };
      }
    } catch (err) {
      return { status: false, message: "DB error"};
    }
  },
};
