import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';
import { loadMovies } from './actions/movieActions';
import App from './components/App';

import './styles/App.scss';

const store = configureStore();
store.dispatch(loadMovies());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
