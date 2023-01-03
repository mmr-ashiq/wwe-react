import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

export class VideoList extends Component {
	render() {
		return (
			<div className="col-md-4 mt-4 border border-secondary-subtle">
				<VideoListItem
					imgSrc="https://i.ytimg.com/vi/n0PmdJjkEN4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDblRP2Kvi5J8s4I3gwSErMpZsMcw"
					songName="Teka Pakhi - Studio Version (Unplugged) | Masha"
					viewsDate="1M views | 1 years ago"
				/>
				<VideoListItem
					imgSrc="https://i.ytimg.com/vi/lrAM_H7v8wM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDmFuonXOGHF02ahtdL6xdMa4zpwg"
					songName="Kya Mujhe Pyar Hai | Woh Lamhe | KK | Pritam"
					viewsDate="13M views | 11 years ago"
				/>
				<VideoListItem
					imgSrc="https://i.ytimg.com/vi/y_s16oU7fPQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCE9ZoGoxYGKZXLHChJlQvbpu_b0g"
					songName="লালন ব্যান্ড-(সুমি) #বসন্ত বাতাসে | Boshonto Batase- Lalon Band"
					viewsDate="1.8M views | 2 year ago"
				/>
				<VideoListItem
					imgSrc="https://i.ytimg.com/vi/BAeGLiBZuiQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBFXV89ZFCirGPIAKjxz76EV0ULCg"
					songName="Dil Ibaadat Full Video - Tum Mile|Pritam|KK"
					viewsDate="76M views | 8 years ago"
				/>
				<VideoListItem
					imgSrc="https://i.ytimg.com/vi/0SCopio77gM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAtvRgwXI3iRLhjumEVVoQeGHzcxw"
					songName="Dokhino Hawa | Coke Studio Bangla | Season One | Tahsan X Madhubanti"
					viewsDate="15M views | 4 months ago"
				/>
			</div>
		);
	}
}

export default VideoList;
