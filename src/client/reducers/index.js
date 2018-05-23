import { combineReducers } from 'redux';
import movies from './movieReducer';
import selectedMovie from './selectedMovieReducer';

const rootReducer = combineReducers({
  movies,
  selectedMovie
});

export default rootReducer;
