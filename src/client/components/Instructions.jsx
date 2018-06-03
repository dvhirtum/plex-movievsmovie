import React from 'react';
import { history } from '../store/configureStore';

const Instructions = () => (
  <div>
    <h2>Instructions</h2>
    <p>You will be presented with 9 random movies from your Plex collection, in 3 rounds of 3 movies each.</p>
    <p>In each round, select the movie that you would like to see the most.</p>
    <p>In the final round, you will be presented with the winning movies from the first 3 rounds.</p>
    <p>Again, select the movie that you would like to see the most. That is the winning movie.</p>
    <button type="button" className="btn btn-primary" onClick={() => history.push('/')}>
      Back
    </button>
  </div>
);

export default Instructions;
