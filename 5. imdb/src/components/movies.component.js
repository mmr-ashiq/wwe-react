import React, { Component } from 'react';
import getMovies from '../service/get-movies.service';
import Table from './common/table.component';
import Rating from './rating.component';

class Movies extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		const movies = getMovies();
		this.setState({ movies });
	}

	handleToggleRating = (movieRank) => {
		const movies = [...this.state.movies];
		const movie = movies.find((movie) => movie.id === movieRank);
		movie.your_rating = !movie.your_rating;
		this.setState({ movies });
	};

	render() {
		// key = path
		// object[key] is a another syntex of accessing object property
		// we can use object[key] or object.key
		// here we can also use movie.path instead of movie[key]
		const columns = [
			{
				label: 'Rank',
				path: 'id',
				content: (movie, key) => <td>{movie[key]}</td>,
			},
			{
				label: 'Poster',
				path: 'posterUrl',
				content: (movie, key) => <td><img src={movie[key]} style={{height: "100px", width: "auto"}} alt="url changed" /></td>,
			},
			{
				label: 'Title',
				path: 'title',
				content: (movie, key) => <td className="fw-bold">{movie[key]}</td>,
			},
			{
				label: 'Year',
				path: 'year',
				content: (movie, key) => <td>{movie[key]}</td>,
			},
			{
				label: 'Your Rating',
				path: 'your_rating',
				content: (movie, key) => (
					<td className="text-center">
						<Rating
							isRated={movie[key]}
							handleToggleRating={this.handleToggleRating}
							rank={movie.id}
						/>
					</td>
				),
			},
			{
				label: 'Director',
				path: 'director',
				content: (movie, key) => <td>{movie[key]}</td>,
			},
		];

		return (
			<>
				<Table data={this.state.movies} columns={columns} />
			</>
		);
	}
}

export default Movies;
