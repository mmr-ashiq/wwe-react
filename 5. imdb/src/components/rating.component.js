import React, { Component } from 'react';

class Rating extends Component {
	state = {
		isHovered: false,
	};

	handleHover = () => {
		this.setState({ isHovered: true });
	};

	handleOut = () => {
		this.setState({ isHovered: false });
	};

	getClassName = () => {
		const { isRated } = this.props;
		const { isHovered } = this.state;

		let className = isRated ? 'bi bi-star-fill' : 'bi bi-star';
		className += isHovered ? ' text-primary' : '';

		return className;
	};

	render() {
		const { handleToggleRating, rank } = this.props;

		return (
			<>
				<i
					onMouseOver={this.handleHover}
					className={this.getClassName()}
					onMouseOut={this.handleOut}
					onClick={() => handleToggleRating(rank)}
				></i>
			</>
		);
	}
}

export default Rating;
