import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<SearchBar />
				<div className="row">
					<VideoDetail />
					<VideoList />
				</div>
			</div>
		);
	}
}

export default App;
