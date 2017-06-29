var express = require('express');
var router = express.Router();

/* GET game listing. */
router.get('/', function(req, res, next) {
  res.json({a:3});
});

module.exports = router;
