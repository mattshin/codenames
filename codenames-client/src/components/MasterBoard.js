import React from 'react';
import Async from 'react-promise';
import Board from './Board';
import Card from './Card';

class MasterBoard extends Board {
  constructor(props) {
    super(props);
    this.state = this.props.boardState;
  }
  renderCard(index, word, color) {
    return <Async key={index} promise={this.state} then={(state) => 
      <Card key={index} word={word} revealColor={state[word].color} revealed={true}/>}
      />;
  };
}

export default MasterBoard;
