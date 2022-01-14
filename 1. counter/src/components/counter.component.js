import React, { Component } from 'react';

class Counter extends Component {
	/* handle = () => {
		this.props.handleIncrement(this.props.id);
	} */

	render() {
		const {
			id,
			value,
			handleDecrement,
			handleIncrement,
			handleReset,
			handleRemove,
		} = this.props;
		return (
			<>
				<div className="container border border-success rounded mt-4">
					<button
						className="btn btn-primary"
						disabled={value === 1}
						onClick={() => handleDecrement(id)}
					>
						-
					</button>

					<span className="m-4">{value}</span>

					<button
						className="btn btn-primary"
						onClick={() => handleIncrement(id)}
					>
						+
					</button>
					<button
						className="btn btn-info m-2"
						onClick={() => handleReset(id)}
					>
						Reset
					</button>
					<button
						className="btn btn-danger m-2"
						onClick={() => handleRemove(id)}
					>
						Remove
					</button>
				</div>
			</>
		);
	}
}

export default Counter;
