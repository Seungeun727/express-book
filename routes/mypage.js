const express = require('express');
const router = express.Router();
const { verifyToken }= require('../middlewares/auth');
const controllers = require('../controllers/mypageController');

router.get('/', verifyToken, controllers.getUserInfo);
router.put('/edit', verifyToken, controllers.updateUserInfo);
router.get('/article', verifyToken, controllers.userPost);

module.exports = router;