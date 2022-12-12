const { decodedToken } = require('../auth/jwt');
const { secrectKey } = require('../config/config');

exports.verifyToken = (req, res, next) => {
  const access_token = req.headers.authorization.split('Bearer ')[1];
  if(access_token == "null") {
    return res.status(403).json({
      status: 403,
      message: '토큰 형식에 맞지 않습니다.'
    });
  } else {
    try {
      const decoded = decodedToken(access_token, secrectKey);
      console.log(decoded)
      req.id = decoded.user_id;
      next();
    } catch (err) {
      res.status(401).json({
        status: 401,
        message: '토큰이 만료되었습니다.'
      })
    }
  }
};