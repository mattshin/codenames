var _ = require('lodash');
var fs = require('fs');
const gameWordBank = require('./words.json');
const colors = [
  1, 1, 1, 1, 1, 
  1, 1, 1, 1, 2,
  2, 2, 2, 2, 2,
  2, 2, 3, 0, 0,
  0, 0, 0, 0, 0
]


function getWords(){
    return _.sampleSize(gameWordBank, 25); 
}

function getColors(){
    return _.shuffle(colors);
}

var colorMap = { 
  0: "#ffffbb",  // Yellow
  1: "#70c0ff",  // Blue
  2: "#ff7070",  // Red
  3: "#555555"   // Black
}; 

function newGame(){
  console.log("Starting New Game");
  var boardState = {};
  var wordColorMap = _.zip(getWords(), getColors());

  wordColorMap.forEach( function(pair){
    var word = pair[0];
    var color = pair[1];
    boardState[word] = {};
    boardState[word]['revealed'] = false;
    boardState[word]['color'] = colorMap[color];
  });

  fs.writeFile('./game/currentGame.json', JSON.stringify(boardState), 'utf8', function (err){
    if (err){
      throw err;
    }
  });
  return boardState;
}

module.exports = {
  newGame: newGame
};
