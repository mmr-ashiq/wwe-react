import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<SearchBar />
				<div className="row">
					<VideoDetail />
				</div>
			</div>
		);
	}
}

export default App;
