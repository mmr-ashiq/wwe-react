import React, { Component } from 'react';
import Project from './project.component';

class Projects extends Component {
	state = {
		projects: [
			'Richkid ecommerce -web',
			'Todo -desktop',
			'Gym Management CLI',
			'CRUD Application',
		],
	};

    handleDeleteProject = () => {
        console.log('Takking');
    };

	render() {
		return (
			<>
				<h1>My Projects</h1>
				{
                    this.state.projects.map((project, index) => {
                        return <Project name={project} key={index} onDeleteProject={this.handleDeleteProject}  />
                    })
                }
			</>
		);
	}
}

export default Projects;
