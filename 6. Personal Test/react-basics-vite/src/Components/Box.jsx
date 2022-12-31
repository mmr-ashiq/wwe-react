import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class Box extends Component {
	constructor(props) {
		super(props);
	}

	delete = () => {
		const { id } = this.props;
		this.props.onDelete(id);
	};

	increase = () => {
		this.props.onIncrease(this.props.id);
	};

	decrease = () => {
		this.props.onDecrease(this.props.id);
	};

	render() {
		return (
			<div className="container">
				<button className="btn btn-info m-2" onClick={this.decrease}>
					Decrement
				</button>
				<span className="m-2">{this.props.num}</span>
				<button className="btn btn-success m-2" onClick={this.increase}>
					Increment
				</button>
				<button className="btn btn-outline-danger m-2" onClick={this.delete}>
					Delete
				</button>
			</div>
		);
	}
}
