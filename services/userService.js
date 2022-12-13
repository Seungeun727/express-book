const pool = require('../db/index');
const bcrypt = require('bcrypt');

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
};
