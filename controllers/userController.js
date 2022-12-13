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
  }
};