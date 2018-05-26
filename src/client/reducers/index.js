import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movieReducer';
import winners from './roundReducer';

const rootReducer = combineReducers({
  movies,
  winners,
  router: routerReducer
});

export default rootReducer;
