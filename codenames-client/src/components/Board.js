import React from 'react';
import Async from 'react-promise';
import Card from './Card';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.boardState;
  }
  renderCard(index, word, color) {
    return <Async key={index} promise={this.state} then={(state) => 
      <Card key={index} word={word} revealColor={state[word].color} revealed={false}/>}
      />;
  };

  renderRow(index, words) {
    var cards = [];
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
    var board = this.state.then(function (state){
      var words = Object.keys(state);
      var rows = [];
      for(var i = 0; i < 25; i += 5){
        rows.push(this.renderRow(i, words.slice(i, i+5)));
      }
      return (
        <div>
          {rows}
        </div>
      );
    }.bind(this));
    return <Async promise={board} then={(rows) => (rows)}/>;
  }
}

export default Board;
