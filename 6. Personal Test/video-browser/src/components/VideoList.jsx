import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

export class VideoList extends Component {
	render() {
		const { items, handleSelect } = this.props;

		return (
			<div className="col-md-4 mt-4 border border-secondary-subtle">
				<ul className="list-group">
					{items.map((item) => {
						return (
							<VideoListItem
								handleSelect={handleSelect}
								videoId={item.id.videoId}
								title={item.snippet.title}
								description={item.snippet.description}
								imgUrl = {item.snippet.thumbnails.default.url}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default VideoList;
