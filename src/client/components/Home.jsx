import React from 'react';
import { history } from '../store/configureStore';

const Home = () => (
  <div>
    <button type="button" className="btn btn-secondary" onClick={() => history.push('/instructions')}>
      Instructions
    </button>
    <button type="button" className="btn btn-primary" onClick={() => history.push('/round/1')}>
      Start the game
    </button>
  </div>
);

export default Home;
