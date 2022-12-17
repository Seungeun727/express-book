const pool = require('../db/index');

module.exports = {
  boardWrite: async (params) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO board(users_user_id, board_title, board_author, createdAt, board_text) values(?, ?, ?, ?, ?)`;
      let [result] = await connection.query(sql, params);
      connection.release();
      if(result) {
        return {
          status: true,
          data: result,
        };
      }
    } catch (err) {
      return { 
        status: false,
        message: 'internal server error'
      };
    }
  },
  boardUpdate: async(params) => {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const sql = 'UPDATE board SET board_title =?, createdAt=?, board_text =? WHERE board_no= ? AND users_user_id=?';
      let [rows] = await connection.query(sql, params);
      console.log("hey", rows);
      connection.release();
      if(rows.affectedRows == 1) {
        return { status: true };
      } else {
        return { status: false };
      }
    } catch (err) {
      return { 
        status: false,
        message: 'internal server error'
      };
    }
  },
};