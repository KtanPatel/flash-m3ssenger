var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(501).send('<h3>Loading...</h3>');
});

module.exports = router;
