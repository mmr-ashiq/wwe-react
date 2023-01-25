import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './css/video__list__item.css';

const App = () => {
const [searchTerm, setSearchTerm] = useState('');
const [data, setData] = useState({});
const [videoId, setVideoId] = useState('');
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSearch = () => {
	const getYoutubeVideos = () => {
		const url = "https://www.googleapis.com/youtube/v3/search";
		const key = "AIzaSyDRYnLieH9Xv8urb8_67J4G1CTNZXYFNkM";
		const type = 'video';
		const part = 'snippet';
		const q = searchTerm;

		const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

		axios
			.get(targetUrl)
			.then((response) =>
				setData(response.data)
			)
			.catch((error) => console.log(error));
	};
	getYoutubeVideos();
};

const handleChange = ({ target: { value } }) => setSearchTerm(value);
const handleSelect = (videoId, title, description) => {
	setVideoId(videoId);
	setTitle(title);
	setDescription

(description);
};

return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<SearchBar
					handleSearch={handleSearch}
					handleChange={handleChange}
				/>
			</div>
		</div>
		<div className="row">
			<VideoDetail
				videoId={videoId}
				title={title}
				description={description}
			/>
			<VideoList
				items={data.items}
				handleSelect={handleSelect}
			/>
		</div>
	</div>
);
};

export default App;