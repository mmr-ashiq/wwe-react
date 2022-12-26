import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Box extends Component {
	state = {
		count: 0,
	};

	increase = () => {
		const newNumber = this.state.count + 1;
		const newState = { count: newNumber };
		this.setState(newState);
	};

	decrease() {
		const newNumber = this.state.count - 1;
		const newState = { count: newNumber };
		this.setState(newState);
	}

	render() {
		return (
			<div className="container">
				<button className="btn btn-danger" onClick={this.decrease}>
					-
				</button>
				{this.state.count}
				<button className="btn btn-primary" onClick={this.increase}>
					+
				</button>
			</div>
		);
	}
}
