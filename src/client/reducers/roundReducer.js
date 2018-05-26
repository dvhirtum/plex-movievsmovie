import * as types from '../actions/actionTypes';
import initialState from './initialState';

const movieReducer = (state = initialState.winners, action) => {
  switch (action.type) {
    case types.SELECT_MOVIE: {
      const result = Object.assign({}, state);
      result[action.round] = action.movie;
      return result;
    }
    default:
      return state;
  }
};

export default movieReducer;
