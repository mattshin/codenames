var gameData = require('./currentGame.json');

function getWords(){
    return gameData.words; 
}

function getColors(){
    return gameData.colors;
}

var colorMap = { 0: "#ffff00",  // Yellow
                1: "#0000ff",  // Blue
                2: "#ff0000",  // Red
                3: "#000000"}; // Black

function newGame(){
    console.log("Starting New Game");
}

module.exports = { getWords: getWords, 
                getColors: getColors, 
                colorMap: colorMap,
                newGame: newGame};