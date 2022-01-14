import React, { Component } from 'react';

class EmployeeProfile extends Component {
	render() {
		const { name, position, about, facebook_link, github_link } =
			this.props.employee;

		return (
			<div className="col-3 m-1">
				<div className="card my-2">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							{position}
						</h6>
						<p className="card-text">{about}</p>
						<a href={facebook_link} className="card-link">
							Facebook
						</a>
						<a href={github_link} className="card-link">
							Github
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployeeProfile;
