import React from 'react';
import Board from './Board';
import MasterBoard from './MasterBoard';
import { Route } from 'react-router-dom';

class GameComponent extends React.Component {
  constructor() {
    super();
    this.state = fetch('/boardState')
      .then(res => res.json());
  }

  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <div>
              <Route path="/codemaster" render={ () => <MasterBoard boardState={this.state}/> } />
            </div>
            <div>
              <Route path="/game" render={ () => <Board boardState={this.state}/> } />
            </div>
          </div>
          <div className="new-game">
            <button className="new-game-button" onClick={function(){alert('New Game');}}>
              Start a New Game
            </button>
          </div>
        </div>    
      </div>
    );
  }
}

export default GameComponent