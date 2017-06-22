var _ = require('lodash');
const gameWordBank = require('./words.json');
const colors = [
  1, 1, 1, 1, 1, 
  1, 1, 1, 1, 2,
  2, 2, 2, 2, 2,
  2, 2, 3, 0, 0,
  0, 0, 0, 0, 0
]


function getWords(){
    return _sampleSize(gameWordBank, 25); 
}

function getColors(){
    return _shuffle(colors);
}

var colorMap = { 
  0: "#ffff00",  // Yellow
  1: "#0000ff",  // Blue
  2: "#ff0000",  // Red
  3: "#000000"   // Black
}; 

function newGame(){
  console.log("Starting New Game");
  var boardState = {};
  var wordColorMap = _.zip(game.getWords(), game.getColors());

  wordColorMap.forEach( function(pair){
    var word = pair[0];
    var color = pair[1];
    boardState[word] = {};
    boardState[word]['revealed'] = false;
    boardState[word]['color'] = color;
  });

  return boardState;
}

module.exports = {  
  colorMap: colorMap,
  newGame: newGame
};