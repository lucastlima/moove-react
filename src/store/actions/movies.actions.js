import mdbFetch from '../../api/tmdb';
import {
  SET_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from '../reducers/movies.reducer';

export const fetchMovies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING });
    const req = await mdbFetch.get('/movie/popular');
    const res = await req.data;

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: res.results
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: error });
  }
};
