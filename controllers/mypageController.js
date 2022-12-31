const userService = require('../services/mypageService');

module.exports = {
  getUserInfo: async(req, res, next) => {
    try {
      const userId = req.id;
      const findUser = await userService.findUserInfo(userId);
      if(findUser.status == true) {
        console.log(findUser.data[0]);
        return res.status(200).json({ userInfo: findUser.data[0]});
      } else {
        return res.status(201).json({ code: 400, message: '작성하신 게시물이 업습니다.'});
      }
    } catch (err) {
      next(err);
    }
  },
  updateUserInfo: async(req, res, next) => {
    try {
      const origin_userId = req.id;
      const { name } = req.body;
      const values = [ name, origin_userId ];
      if(name === '') return false;
      const findUser = await userService.findUserInfo(name);
      if(findUser.status == true) {
        const updateUser = await userService.updateUser(values);
        return res.status(201).json({
          message: '성공적으로 정보가 수정되었습니다.'
        });
      } 
    } catch (err) {
      next(err);
    }
  },
  userPost: async(req, res, next) => {
    try {
      const userId = req.id;
      const findPosts = await userService.findUserPost(userId);
      if(findPosts) {
        return res.status(200).json(findPosts);
      }
    } catch (err) {
      next(err);
    }
  },
};