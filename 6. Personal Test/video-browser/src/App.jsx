import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './css/video__list__item.css';

export class App extends Component {
	state = {
		searchTerm: '',
		data: {},
		videoId: '',
		title: '',
		description: '',
	};

	handleChange = ({ target: { value: searchTerm } }) =>
		this.setState({ ...this.state, searchTerm });

	handleSelect = (videoId, title, description) =>
		this.setState({ ...this.state, videoId, title, description });

	componentDidUpdate(prevProps, prevState) {
		const getYoutubeVideos = () => {
			const url = "https://www.googleapis.com/youtube/v3/search";
			const key = "AIzaSyDRYnLieH9Xv8urb8_67J4G1CTNZXYFNkM";
			const type = 'video';
			const part = 'snippet';
			const q = this.state.searchTerm;

			const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

			axios
				.get(targetUrl)
				.then((response) =>
					this.setState({ ...this.state, data: response.data })
				)
				.catch((error) => console.log(error));
		};

		if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
	}

	render() {
		return (
			<div className="container">
				<SearchBar handleChange={this.state.handleChange} />

				<div className="row">
					<VideoDetail
						videoId={this.state.videoId}
						title={this.state.title}
						description={this.state.description}
					/>

					<VideoList items={this.state.data.items || []} handleSelect={this.state.handleSelect} />
				</div>
			</div>
		);
	}
}

export default App;
