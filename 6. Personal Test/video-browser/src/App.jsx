import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class App extends Component {
	state = {
		searchTerm: '',
		data: {},
	};

	handleChange = (event) => {
		const value = event.target.value;
		const newState = { searchTerm: value, data: this.state.data };
		this.setState(newState);
	};

	componentDidUpdate(prevProps, prevState) {
		const getYoutubeVideos = () => {
			const url = 'https://www.googleapis.com/youtube/v3/search';
			const key = 'AIzaSyDqiI2-FG8N7qHOaR-5xvqnzEYU_S9Du_s';
			const type = 'video';
			const part = 'snippet';
			const q = this.state.searchTerm;

			const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

			const promise = axios.get(targetUrl);

			const success = (response) => {
				console.log('successfull');
				console.log(response.data);

				const newState = {
					searchTerm: this.searchTerm,
					data: response.data,
				};
				this.setState(newState);
			};

			const error = (error) => {
				console.log('error');
				console.log(error);
			};

			promise.then(success).catch(error);
		};

		if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
	}

	render() {
		const items = this.state.data.items || [];

		return (
			<div className="container">
				<div className="d-flex justify-content-center">
					<input
						onChange={this.handleChange}
						type="text"
						className="m-2 p-2 w-75 border border-success border-opacity-25 shadow-sm"
					/>
					<br />
				</div>

				<div className="row">
					<div className="col-md-8">{this.state.searchTerm}</div>

					<div className="col-md-4">
						<ul className="list-group">
							{items.map((item) => {
								const imgUrl = item.snippet.thumbnails.default.url;
								const title = item.snippet.thumbnails.title;

								return (
									<li className="list-group-item media videolist">
										<img className="mr-3" src={imgUrl} />
										<div className="media-body">
											{title}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
