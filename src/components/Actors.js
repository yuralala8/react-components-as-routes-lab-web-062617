import React from 'react';
import { actors } from '../data';

const Actors = () => {
	let actorsInfo = []
	actorsInfo.push(actors.map((actor) => <div className="actor"> {actor.name} <ul> {actor.movies} </ul> </div>))
  return (
    <div>
      <h1>Actors Page</h1>
   		{actorsInfo}
    </div>
  );
};

export default Actors;
