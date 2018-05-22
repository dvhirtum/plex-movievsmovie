import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import { loadMovies } from './actions/movieActions';

import './styles/App.scss';

const store = configureStore();
store.dispatch(loadMovies());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
