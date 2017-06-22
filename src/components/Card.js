import React from 'react';
const unrevealedColor = '#F0F0F0';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onClick: this.revealCard(this.props.revealColor, this),
			revealed: false,
			color: unrevealedColor 
		};
		this.didMount = false;
	}

	componentDidMount() {
		this.didMount = true;
	}

	render() {
		return (
			<button className="card" style={{background: this.state.color}} onClick={this.state.onClick}>
				{this.props.word}
			</button>
		);
	}

	revealCard(color, card) {
		return function() {
			card.setState({
				revealed: true,
				color: color
			});
		};
	}
}

export default Card;
