import axios from 'axios';
import moment from 'moment';
import {
  FETCH_TRENDING_START,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR,
  SET_FROM_LOCAL
} from '../reducers/movieDB.reducer';

export const fetchTrending = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_TRENDING_START });
    const req = await axios(
      'https://api.themoviedb.org/3/trending/all/week?api_key=f8470eb01393c02fbae6d72d9e1bf2ff'
    );
    const res = await req.data;

    const tvShow = [];
    const movies = [];

    for (let item of res.results) {
      item.media_type === 'movie' ? movies.push(item) : tvShow.push(item);
    }
    const timestamp = moment()
      .add(3, 'm')
      .valueOf();

    dispatch({
      type: FETCH_TRENDING_SUCCESS,
      payload: { tvShow, movies, timestamp }
    });
    dispatch(setLocal());
  } catch (error) {
    dispatch({ type: FETCH_TRENDING_ERROR, payload: error });
  }
};

export const setLocal = () => (dispatch, getState) => {
  localStorage.setItem('movieDB', JSON.stringify(getState()));
};

export const setFromLocal = data => (dispatch, getState) => {
  dispatch({ type: SET_FROM_LOCAL, payload: data });
};
