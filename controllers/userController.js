const userService = require('../services/userService');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { password, passwordCheck } = req.body;
      
      if(password !== passwordCheck) {
        return res.status(400).json({
          status: false,
          errorMsg: "비밀번호가 일치하지 않습니다.", 
        });
      }
      const user = await userService.register(req.body);
      if(user.status == true) {
        return res.status(201).json({
          status: true, 
          successMsg: "회원가입에 성공했습니다."
        });
      }
    } catch(err) {
      return res.status(500).json({ 
        message: err.message, 
        signMessage: { status: false, errorMsg: "회원가입에 실패했습니다." }
      });
    }
  },
  duplicate: async(req, res, next) => {
    const userId = req.params.id;
    try {
      if(userId === "undefined" || userId === "null") {
        return res.status(403).json({
          status: false,
          message: "아이디 형식이 맞지 않습니다."
        });
      } else if(userId.length === 0 || userId.length < 5 || userId.length > 20 ) {  
        return res.status(403).json({
          status: false,
          message: "아이디 형식이 맞지 않습니다."
        });
      } else {
        const result = await userService.duplicateUser(userId);
        console.log(result);
        if (result.status == true) {
          return res.status(200).json({
            status: true, 
            message: "중복된 아이디가 아닙니다."
          });
        } else {
          return res.status(409).json({
            status: false,
            message: "중복된 아이디입니다."
          });
        }
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
      connection.release();
    }
  },
  login: async(req, res, next) => {
    const { id: user_id, password: user_password } = req.body;
    
    if(user_id === "undefined" || user_password === "undefined") {
      return res.status(401).json({
        status: 401,
        message: "아이디 혹은 패스워드가 일치하지 않습니다.",
      });
    } else {
      try {
        const result = await userService.loginUser(user_id, user_password);
        if(result.status == true) {
          return res
            .cookie("accessToken", result.data.access_token, {
              maxAge: 60 * 60,
              httpOnly: false,
            })
            .status(201)
            .json({
              status: 201, 
              message: "로그인을 성공했습니다.", 
              userInfo: result.data.userInfo, 
              access_token: result.data.access_token
            });
        } else {
          return res.status(401).json({
            status: 401,
            message: "아이디 혹은 패스워드가 일치하지 않습니다.",
          }); 
        }
      } catch(err) {
        return res.status(500).json({
          status: 500,
          message: err.message 
        });
      }
    }
  },
  logout: async(req, res, next) => {
    try {
      return res
        .status(205)
        .cookie("accessToken", null, { maxAge: 0 })
        .json({
          status: 205,
          message: "로그아웃되었습니다."
        });
    } catch (err) {
      console.log(err);
    }
  },
};