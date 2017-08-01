var express = require('express');
var router = express.Router();
var fs = require('fs');
var game = require('../game/game')

/* GET game listing. */
router.get('/boardState', function(req, res, next) {
	var boardState = fs.readFileSync('./game/currentGame.json');
	res.json(JSON.parse(boardState));
});

router.get('/newGame', function(req, res, next) {
	var newGame = game.newGame();
	res.json(newGame);
})

module.exports = router;
