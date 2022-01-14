import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends Component {
	state = {
		counters: [
			{
				id: 1,
				value: 1,
			},
			{
				id: 2,
				value: 1,
			},
			{
				id: 3,
				value: 1,
			},
		],
	};

	handleIncrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		counter.value += 1;

		// this.setState({ counters }); // shortcut
		const obj = { counters: counters };
		this.setState(obj);
	};

	handleDecrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		counter.value -= 1;

		this.setState({ counters });
	};

	handleReset = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		counter.value = 1;

		this.setState({ counters });
	};

	handleRemove = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		const index = counters.indexOf(counter);
		counters.splice(index, 1);

		this.setState({ counters });
	};

	showTouchedCounter = () => {
		let count = 0;
		this.state.counters.forEach((counter) => {
			if (counter.value > 0) count++;
		});
		return count;
	};

	render() {
		return (
			<div>
				<div>{this.showTouchedCounter()}</div>

				{this.state.counters.map((counter) => {
					return (
						<React.Fragment key={counter.id}>
							<Counter
								id={counter.id}
								value={counter.value}
								handleIncrement={this.handleIncrement}
								handleDecrement={this.handleDecrement}
								handleReset={this.handleReset}
								handleRemove={this.handleRemove}
							/>
							<hr className="container" />
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}

export default Counters;
