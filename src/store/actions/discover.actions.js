import mdbFetch from '../../api/tmdb';
import {
  SET_LOADING,
  DISCOVER_MOVIES_SUCCESS,
  DISCOVER_MOVIES_ERROR
} from '../reducers/discover.reducer';

export const fetchDiscoverMovies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING });
    const req = await mdbFetch.get('/discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        timezone: 'Europe/London',
        region: 'GB'
      }
    });
    const res = await req.data;

    dispatch({
      type: DISCOVER_MOVIES_SUCCESS,
      payload: res.results
    });
  } catch (error) {
    dispatch({ type: DISCOVER_MOVIES_ERROR, payload: error });
  }
};
