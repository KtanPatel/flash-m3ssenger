var express = require('express');
var router = express.Router();
var userRouter = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Flash Messenger API' });
});

router.use('/users', userRouter);

module.exports = router;
