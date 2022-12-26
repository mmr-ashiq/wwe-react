import React, { Component } from 'react';
import Box from './Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
	state = {
		boxes: [1, 2, 3, 4, 5],
	};

	render() {
		return (
			<React.Fragment className='m-4'>
				{this.state.boxes.map((number) => {
					return (
						<React.Fragment key={number}>
							<Box />
							<br />
						</React.Fragment>
					);
				})}
			</React.Fragment>
		);
	}
}
