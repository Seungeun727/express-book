const pool = require('../db/index');

module.exports = {
  findUserPost: async(userId) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT * FROM board WHERE users_user_id =? LIMIT 3`;
      const [rows] = await connection.query(sql, userId);
      if(rows.length !== 0) return rows;
    } catch(err) {
      return { 
        status: false,
        message: 'internal server error'
      };
    }
  },
};