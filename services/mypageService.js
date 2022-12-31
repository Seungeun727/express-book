const pool = require('../db/index');

module.exports = {
  findUserInfo: async(userId) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const [rows] = await connection.query('SELECT user_id, user_name, user_email FROM users WHERE user_id =?', userId);
      connection.release();
      return { status: true, data: rows};
    } catch (err) {
      return { 
        status: false,
        message: 'internal server error'
      };
    }
  },
  updateUser: async(values) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      connection.beginTransaction();
      const sql = 'UPDATE users SET user_name =? WHERE user_id =?';
      const [rows] = await connection.query(sql, values);
      connection.release();
      if(rows.changedRows == 1) return { status: true, data: rows }
    } catch (err) {
      return { status: false, message: 'Internal Server Error'};
    }
  },
  findUserPost: async(userId) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const sql = 'SELECT * FROM board WHERE users_user_id =? LIMIT 3';
      const [rows] = await connection.query(sql, userId);
      connection.release();
      if(rows.length !== 0) return rows;
    } catch(err) {
      console.log(err);
      return { 
        status: false,
        message: 'internal server error'
      };
    }
  },
};