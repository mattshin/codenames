import React from 'react';
import Board from './Board';
import MasterBoard from './MasterBoard';
import { Route } from 'react-router-dom';

const API_URL = 'https://codenames.mattshin.dev/api'

class GameComponent extends React.Component {
  constructor() {
    super();
    this.state = fetch(`${API_URL}/boardState`)
      .then(res => res.json());
  }

  startNewGame(gameState) {
    return () => {
      var newState = fetch(`${API_URL}/newGame`)
      .then(res => res.json());
      window.location.reload(newState);
    }
  };

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
            <button className="new-game-button" onClick={this.startNewGame(this.state)} >
              Start a New Game
            </button>
          </div>
        </div>    
      </div>
    );
  }
}

export default GameComponent
