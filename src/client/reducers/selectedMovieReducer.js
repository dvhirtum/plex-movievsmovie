import * as types from '../actions/actionTypes';
import initialState from './initialState';

const movieReducer = (state = initialState.selectedMovie, action) => {
  switch (action.type) {
    case types.SELECT_MOVIE:
      return action.movie;
    default:
      return state;
  }
};

export default movieReducer;
