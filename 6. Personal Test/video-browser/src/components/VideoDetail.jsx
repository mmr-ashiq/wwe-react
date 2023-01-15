import React, { Component } from 'react';

export class VideoDetail extends Component {
	render() {
		const { videoId, title, description } = this.props;
		
		return (
			<div className="col-md-8 mt-4">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						style={{ width: '100%', height: '480px' }}
						src={`https://www.youtube.com/embed/${videoId}`}
						// src={`https://www.youtube.com/embed/ILamw3XTp-U`}
						allowFullScreen
					></iframe>
				</div>
				<div className="details border border-success p-2 mb-2 border-opacity-25">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default VideoDetail;
