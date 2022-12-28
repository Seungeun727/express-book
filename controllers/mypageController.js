const userService = require('../services/mypageService');

module.exports = {
  getUserInfo: async(req, res, next) => {
    try {
      const userId = req.id;
      const findUser = await userService.findUserInfo(userId);
      if(findUser.status == true) {
        console.log(findUser.data[0]);
        return res.status(200).json({ userInfo: findUser.data[0]});
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