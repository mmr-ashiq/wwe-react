import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		const { count } = this.state;
		this.setState({
			count: count + 1,
		});
	};

	handleDecrement = () => {
		const { count } = this.state;
		if (count > 0) this.setState({ count: count - 1 });
	};

	handleReset = () => {
		this.setState({ count: 0 });
	};

	render() {
		return (
			<>
				<div className="container border border-success rounded mt-4">
					<h1 className='text-center'>Counter App</h1>
					<button className="btn btn-primary" onClick={this.handleIncrement}>
						+
					</button>
					<span className="m-4">{this.state.count}</span>
					<button className="btn btn-primary" onClick={this.handleDecrement}>
						-
					</button>
					<button className="btn btn-danger m-4" onClick={this.handleReset}>
						Reset
					</button>
				</div>
			</>
		);
	}
}

export default Counter;
