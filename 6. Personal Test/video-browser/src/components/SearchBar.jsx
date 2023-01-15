import React, { Component } from 'react';

export class SearchBar extends Component {
	render() {
		const { handleChange } = this.props;

		return (
			<div className="d-flex justify-content-center">
				<input
					type="text"
					onChange={handleChange}
					className="m-2 p-2 w-75 border border-success border-opacity-25 shadow-sm"
				/>
				{/* <button type="button" className="btn btn-outline-secondary" onClick={this.handleChange} style={{fontSize: '1rem' }}>Search</button> */}
				<br />
			</div>
		);
	}
}

export default SearchBar;
