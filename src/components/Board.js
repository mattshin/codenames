import React from 'react';
import Card from './Card';

var game = require('../game/game.js');
const colorHexMap = game.colorMap;

var boardState = game.newGame();

class Board extends React.Component {
  constructor() {
    super();
    this.state = boardState;
  }
  renderCard(index, word, color) {
    return <Card key={index} word={word} revealColor={colorHexMap[this.state[word].color]}/>;
  };

  renderRow(index, words) {
    var cards = []
    words.forEach( function(word){
        cards.push(this.renderCard(index++, word, this.state[word]))
    }.bind(this));
    return (
        <div key={index} className="board-row">
          {cards}
        </div>
    );
  }

  render() {
    var words = Object.keys(this.state);

    const status = 'Next player: X';
    var rows = [];
    for(var i = 0; i < 25; i += 5){
      rows.push(this.renderRow(i, words.slice(i, i+5)));
    }
    return (
      <div>
        <div className="status">{status}</div>
        {rows}
      </div>
    );
  }
}

export default Board;
