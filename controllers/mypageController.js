const userService = require('../services/mypageService');

module.exports = {
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