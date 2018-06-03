import React from 'react';
import { history } from '../store/configureStore';

const Instructions = () => (
  <div>
    <h2>Instructions</h2>
    <button type="button" className="btn btn-primary" onClick={() => history.push('/')}>
      Back
    </button>
  </div>
);

export default Instructions;
