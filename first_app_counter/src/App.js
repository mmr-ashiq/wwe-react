import React from 'react';
import Counter from './components/counter.component';
import Navbar from './components/navbar.component';

function App() {  
	return (
		<React.Fragment>
			<Navbar />
			<Counter />
		</React.Fragment>
	);
}

export default App;
