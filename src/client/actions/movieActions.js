import * as types from './actionTypes';
import movieService from '../services/movieService';

export function selectMovie(movie) {
  return (dispatch) => {
    dispatch({
      type: types.SELECT_MOVIE,
      movie
    });
  };
}

export function loadMovies() {
  return async (dispatch) => {
    const movies = await movieService.getMovies();
    dispatch({
      type: types.LOAD_MOVIES_SUCCESS,
      movies
    });
  };
}
