import React from 'react';
import { directors } from '../data';

const Directors = () => {
	let directorsInfo = []
	directorsInfo.push(directors.map(director => <div>{director.name} <ul>{director.movies}</ul></div>))
  return (
    <div>
      <h1>Directors Page </h1>
      {directorsInfo}
    </div>
  );
}

export default Directors
