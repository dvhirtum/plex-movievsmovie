import * as types from './actionTypes';
import movieService from '../services/movieService';

function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

/* eslint-disable-next-line import/prefer-default-export */
export function loadMovies() {
  return async (dispatch) => {
    const result = await movieService.getMovies();
    dispatch(loadMoviesSuccess(result));
  };
}
