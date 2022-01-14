import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<>
				<span className="fs-3 fw-bold">{this.props.name}</span>
				<button
					className="btn btn-outline-danger p-2 btn-sm m-2"
					onClick={this.props.onDeleteProject}
				>
					Delete Project
				</button>
				<hr />
			</>
		);
	}
}

export default Project;
