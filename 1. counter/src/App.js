import React, { Component } from 'react';
import Counters from './components/counters.component';
import Navbar from './components/navbar.component';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Counters />
			</React.Fragment>
		);
	}
}

export default App;
