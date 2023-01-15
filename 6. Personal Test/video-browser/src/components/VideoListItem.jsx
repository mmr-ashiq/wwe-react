import React, { Component } from 'react';
import '../css/video__list__item.css';

export class VideoListItem extends Component {
	render() {
		const { videoId, title, description, imgUrl, handleSelect } = this.props;

		return (
			<div className="border border-info-subtle media rounded video__list__item m-2 p-1">
				<li
					onClick={() => {
						this.handleSelect(
							videoId,
							title,
							description
						);
					}}
					className="list-group-item media border border-info-subtle media rounded video__list__item m-2 p-1"
				>
					<img className="mr-3" src={imgUrl} />
					<div className="media-body"><h6>{title}</h6></div>
				</li>
			</div>
		);
	}
}

export default VideoListItem;
