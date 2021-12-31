import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 1,
	};

	handleIncrement = () => {
		const { count } = this.state;
		this.setState({
			count: count + 1,
		});
	};

	handleDecrement = () => {
		const { count } = this.state;
		if (count > 1) this.setState({ count: count - 1 });
	};

	handleReset = () => {
		this.setState({ count: 1 });
	};

	render() {
		return (
			<>
				<div className="container border border-success rounded mt-4">
					<h1 className='text-center'>E-commerce Cart Replica</h1>
					<button className="btn btn-primary" onClick={this.handleIncrement}>
						+
					</button>
					<span className="m-4">{this.state.count}</span>
					<button className="btn btn-primary" onClick={this.handleDecrement}>
						-
					</button>
					<button className="btn btn-info m-2" onClick={this.handleReset}>
						Reset
					</button>
					<button className="btn btn-danger m-2" onClick={this.handleReset}>
						Remove
					</button>
				</div>
			</>
		);
	}
}

export default Counter;
