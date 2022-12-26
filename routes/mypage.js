const express = require('express');
const router = express.Router();
const { verifyToken }= require('../middlewares/auth');
const controllers = require('../controllers/mypageController');

router.get('/board', verifyToken, controllers.userPost);

module.exports = router;