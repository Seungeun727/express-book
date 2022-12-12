const jwt = require('jsonwebtoken');
const { secrectKey } = require('../config/config');

module.exports = {
  createToken: function(user_id) {
    return jwt.sign({ 
      user_id
    }, secrectKey, { 
      expiresIn: "1h",
      issuer: 'Noah_Book',
    });
  },
  decodedToken: function(accessToken, secrectKey) {
    return jwt.verify(accessToken, secrectKey);
  },
}