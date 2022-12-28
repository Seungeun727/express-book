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
  findUserPost: async(userId) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      console.log(userId);
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