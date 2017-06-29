var express = require('express');
var router = express.Router();
var game = require('../game/game')

/* GET game listing. */
router.get('/', function(req, res, next) {
	boardState = game.newGame();
  	res.json(boardState);
});

module.exports = router;
