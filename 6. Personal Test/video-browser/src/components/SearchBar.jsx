import React, { useState } from 'react';

const SearchBar = ({ handleChange }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		handleChange(searchTerm);
	};

	return (
		<div className="d-flex justify-content-center">
			<input
				type="text"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				className="m-2 p-2 w-75 border border-success border-opacity-25 shadow-sm"
			/>
			<button type="button" className="btn btn-outline-secondary" onClick={handleSearch} style={{ fontSize: '1rem' }}>Search</button>
			<br />
		</div>
	);
};

export default SearchBar;