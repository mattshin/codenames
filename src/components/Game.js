import React from 'react';
import Board from './Board';
import MasterBoard from './MasterBoard';
import { Route, Redirect } from 'react-router-dom';

var game = require('../game/game.js');
var boardState = game.newGame();

class GameComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <div>
              <Route path="/codemaster" render={ () => <MasterBoard boardState={boardState}/> } />
            </div>
            <div>
              <Route path="/game" render={ () => <Board boardState={boardState}/> } />
            </div>
          </div>
          <div className="new-game">
            <button className="new-game-button" onClick={game.newGame}>
              Start a New Game
            </button>
          </div>
        </div>    
      </div>
    );
  }
}

export default GameComponent