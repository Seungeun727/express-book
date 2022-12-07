const jwt = require('jsonwebtoken');
const { secrectKey } = require('../config/config');

module.exports.createToken = (user_id, user_password) => {
  const payload = {
    userId: user_id,
    userPassword: user_password
  };
  return jwt.sign(payload, secrectKey, { 
    expiresIn: "1h",
    issuer: 'Noah_Book',
  });
}