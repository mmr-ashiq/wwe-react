import React, { Component } from 'react';
import Admin from './components/admin.component';
import EmployeeProfile from './components/employee-profile.component';

class App extends Component {
	state = {
		employees: [
			{
				name: 'John',
				position: 'Software Engineer',
				about: 'He is from BUET',
				facebook_link: 'https://facebook.com/mmr-ashiiq',
				github_link: 'https://github.com/mmr-ashiq',
			},
			{
				name: 'John',
				position: 'Software Engineer',
				about: 'He is from BUET',
				facebook_link: 'https://facebook.com/mmr-ashiiq',
				github_link: 'https://github.com/mmr-ashiq',
			},
			{
				name: 'John',
				position: 'Software Engineer',
				about: 'He is from BUET',
				facebook_link: 'https://facebook.com/mmr-ashiiq',
				github_link: 'https://github.com/mmr-ashiq',
			},
		],
	};

	render() {
		return (
			<div className="container my-2">
				<Admin 
          name="Habib"
          info="I am a Admin of this company. and i lvoe doing adminship."
         />

				<hr />
				<h1>Employees</h1>
				<hr />

				<div className="d-flex">
					{this.state.employees.map((employee, index) => {
						return (
							<EmployeeProfile key={index} employee={employee} />
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
