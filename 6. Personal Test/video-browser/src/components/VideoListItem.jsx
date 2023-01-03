import React, { Component } from 'react';
import '../css/video__list__item.css';

export class VideoListItem extends Component {
	render() {
		const { imgSrc, songName, viewsDate } = this.props;

		return (
			<div className="border border-info-subtle media rounded video__list__item m-2 p-1">
				<img src={imgSrc} alt="" className="rounded" />
				<div className="media-body ms-2">
					<h6>{songName} </h6>
					<p>{viewsDate}</p>
				</div>
			</div>
		);
	}
}

export default VideoListItem;
