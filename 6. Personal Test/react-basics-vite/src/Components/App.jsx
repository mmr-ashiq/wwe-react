import React, { Component } from 'react';
import Box from './Box';

export default class App extends Component {
	state = {
		boxes: [],
	};

	createBox = () => {
		const { boxes } = this.state;
		this.setState({ boxes: [...boxes, 0] });
	};

	onDelete = (id) => {
		const { boxes } = this.state;
		const newBoxes = boxes.filter((box, index) => index !== id);
		this.setState({ boxes: newBoxes });
	};

	onIncrease = (id) => {
		const { boxes } = this.state;
		const newBoxes = boxes.map((box, index) => {
			if (index === id) {
				return box + 1;
			}
			return box;
		});
		this.setState({ boxes: newBoxes });
	};

	onDecrease = (id) => {
		const { boxes } = this.state;
		const newBoxes = boxes.map((box, index) => {
			if (index === id && box > 0) {
				return box - 1;
			}
			return box;
		});
		this.setState({ boxes: newBoxes });
	};

	render() {
		return (
			<React.Fragment>
				<button className='btn btn-primary m-2' onClick={this.createBox}>Add New Box</button>
				{this.state.boxes.map((number, index) => (
					<React.Fragment key={index}>
						<Box num={number} id={index} onDelete={this.onDelete} onIncrease={this.onIncrease} onDecrease={this.onDecrease} />
						<br />
					</React.Fragment>
				))}
			</React.Fragment>
		);
	}
}
