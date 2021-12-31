import React, { Component } from 'react';
import Counter from './components/counter.component';
import Navbar from './components/navbar.component';

class App extends Component {
	state = {
		counters: [1]
	}

	handleAdd = () => {
		const counters  = [...this.state.counters];
		counters.push(1);

		this.setState({ counters });
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<button className='btn btn-primary mt-2' onClick={this.handleAdd}>Add</button>
				
				{
					this.state.counters.map((counter, index) => (
						<>
							<Counter key={index} />
							
						</>
					))
				}
			</React.Fragment>
		);
	}
}

export default App;
