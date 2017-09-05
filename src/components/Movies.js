import React from 'react';
import { movies } from '../data';

const Movies = () => {
	let moviesInfo = []
	moviesInfo.push(movies.map(movie => <div>{movie.title} {movie.time} <ul>{movie.genres}</ul></div>))
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesInfo}
    </div>
  );
};

export default Movies;
