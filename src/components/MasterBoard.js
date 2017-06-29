import React from 'react';
import Card from './Card';

class MasterBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.boardState;
  }
  renderCard(index, word, color) {
    return <Card key={index} word={word} revealColor={this.state[word].color} revealed={true}/>;
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
    var rows = [];
    for(var i = 0; i < 25; i += 5){
      rows.push(this.renderRow(i, words.slice(i, i+5)));
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default MasterBoard;
