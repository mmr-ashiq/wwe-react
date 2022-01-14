import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<p
						className="badge bg-warning text-wrap fs-4 m-2"
					>
						IMDb
					</p>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
			</>
		);
	}
}

export default Navbar;
