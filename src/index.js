import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

import GameComponent from './components/Game';

ReactDOM.render(
	(
	<BrowserRouter>
  		<GameComponent/>
  	</BrowserRouter>
  	),
  	document.getElementById('root')
);

