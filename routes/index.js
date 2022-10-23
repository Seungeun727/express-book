const express = require('express');
const router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.send('indexRouter');
});

module.exports = router;