import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movieReducer';
import selectedMovie from './selectedMovieReducer';

const rootReducer = combineReducers({
  movies,
  selectedMovie,
  router: routerReducer
});

export default rootReducer;
