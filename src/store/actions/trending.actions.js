import mdbFetch from '../../api/tmdb';
import {
  SET_LOADING,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR
} from '../reducers/trending.reducer';

export const fetchTrending = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING });
    const req = await mdbFetch.get('/trending/all/week', {
      params: { region: 'en-GB' }
    });
    const res = await req.data;

    dispatch({
      type: FETCH_TRENDING_SUCCESS,
      payload: res.results
    });
  } catch (error) {
    dispatch({ type: FETCH_TRENDING_ERROR, payload: error });
  }
};
