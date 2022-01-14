import React from 'react';

const TableHeader = props => {
	return (
		<>
			<thead>
				<tr>
					{
						props.columns.map(column => {
							return (
								<th key={column.path}>{column.label}</th>
							);
						})
					}
				</tr>
			</thead>
		</>
	);
};

export default TableHeader;
