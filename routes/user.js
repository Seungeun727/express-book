const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController');

router.post('/register', controllers.register);
router.get('/register/:id', controllers.duplicate);
router.post('/signin', controllers.login);

module.exports = router;