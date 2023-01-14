import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './css/video__list__item.css';

export class App extends Component {
	state = {
		searchTerm: '',
		data: {},
		videoId: '',
		title: '',
		description: '',
	};

	handleChange = (event) => {
		const value = event.target.value;
		const newState = { ...this.state, searchTerm: value };
		
		this.setState(newState);
	};

	handleSelect = (videoId) => {
		const newState = { ...this.state, videoId: videoId, title: title, description: description };
		
		this.setState(newState);
	};

	componentDidUpdate(prevProps, prevState) {
		const getYoutubeVideos = () => {
			const url = 'https://www.googleapis.com/youtube/v3/search';
			const key = 'AIzaSyDsJelC5N2sDsB_1l1T5YHF4nTr6ZxLVJc';
			const type = 'video';
			const part = 'snippet';
			const q = this.state.searchTerm;

			const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

			const promise = axios.get(targetUrl);

			const success = (response) => {
				console.log('successfull');
				console.log(response.data);

				const newState = { ...this.state, data: response.data };
					
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
						type="text"
						onChange={this.handleChange}
						className="m-2 p-2 w-75 border border-success border-opacity-25 shadow-sm"
					/>
					{/* <button type="button" className="btn btn-outline-secondary" onClick={this.handleChange} style={{fontSize: '1rem' }}>Search</button> */}
					<br />
				</div>

				<div className="row">
					<div className="col-md-8 mt-4">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe
								style={{ width: '100%', height: '480px' }}
								src={`https://www.youtube.com/embed/${this.state.videoId}`}
								// src={`https://www.youtube.com/embed/ILamw3XTp-U`}
								allowFullScreen
							></iframe>
						</div>
						<div className="details border border-success p-2 mb-2 border-opacity-25">
							<h3>{this.state.title}</h3>
							<p>{this.state.description}</p>
						</div>
					</div>

					<div className="col-md-4 mt-4 border border-secondary-subtle">
						<ul className="list-group">
							{items.map((item) => {
								const imgUrl =
									item.snippet.thumbnails.default.url;
								const title = item.snippet.title;
								const description = item.snippet.description;
								const videoId = item.id.videoId;

								return (
									<li
										onClick={(event) => {
											this.handleSelect(
												videoId,
												title,
												description
											);
										}}
										className="list-group-item media border border-info-subtle media rounded video__list__item m-2 p-1"
									>
										<img className="mr-3" src={imgUrl} />
										<div className="media-body">
											<h6>{title}</h6>
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
