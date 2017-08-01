var express = require('express');
var router = express.Router();
var game = require('../game/game')

/* GET game listing. */
router.get('/boardState', function(req, res, next) {
	boardState = require('../game/currentGame');
  	res.json(boardState);
});

router.get('/newGame', function(req, res, next) {
	var newGame = game.newGame();
	res.json(newGame)
})

module.exports = router;
