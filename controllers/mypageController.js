const userService = require('../services/mypageService');

module.exports = {
  userPost: async(req, res, next) => {
    try {
      const userId = req.id;
      const posts = await userService.findUserPost(userId);
      if(posts) {
        return res.status(200).json(posts);
      }
    } catch (err) {
      next(err);
    }
  },
};