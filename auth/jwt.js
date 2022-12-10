const jwt = require('jsonwebtoken');
const { secrectKey } = require('../config/config');

module.exports.createToken = (user_id) => {
  return jwt.sign({ 
    user_id
  }, secrectKey, { 
    expiresIn: "1h",
    issuer: 'Noah_Book',
  });
}