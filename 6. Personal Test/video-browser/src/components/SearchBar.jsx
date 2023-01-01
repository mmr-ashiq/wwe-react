import React, { Component } from 'react';

export class SearchBar extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center">
				<input type="text" className="m-2 p-2 w-75 border border-success border-opacity-25 shadow-sm" />
			</div>
		);
	}
}

export default SearchBar;
