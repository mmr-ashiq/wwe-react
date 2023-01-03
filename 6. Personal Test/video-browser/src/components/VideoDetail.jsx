import React, { Component } from 'react';

export class VideoDetail extends Component {
	render() {
		return (
			<div className="col-md-8 mt-4">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						src="https://www.youtube.com/embed/x36_QR28WDU"
						style={{ width: '100%', height: '480px' }}
						allowFullScreen
					></iframe>
				</div>
				<div className="details border border-success p-2 mb-2 border-opacity-25">
					<h5>INNA - Yalla | Official Music Video</h5>
					<p>
						449,528,726 views | Nov 12, 2015 <br /> 💃🏻❤️Yalla 💃🏻❤️ Official
						music video by INNA performing the hit single "Yalla".
					</p>
				</div>
			</div>
		);
	}
}

export default VideoDetail;
