import React from 'react';
import { history } from '../store/configureStore';

const Home = () => (
  <div className="container">
    <div className="row">
      <button type="button" className="btn btn-secondary mx-auto mb-1" onClick={() => history.push('/instructions')}>
        Instructions
      </button>
    </div>
    <div className="row">
      <button type="button" className="btn btn-primary mx-auto" onClick={() => history.push('/round/1')}>
        Start the game
      </button>
    </div>
  </div>
);

export default Home;
