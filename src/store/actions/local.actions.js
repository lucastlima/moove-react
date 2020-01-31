import moment from 'moment';
import { SET_TIMESTAMP, SET_PREV_PATH } from '../reducers/local.reducer';

import {
  fetchMovies,
  fetchDiscoverMovies,
  fetchTrending,
  fetchTvShows
} from './index';

export const init = mediaType => async (dispatch, getState) => {
  // const { local } = getState();

  // console.log("Current timestamp: ", local.timestamp);
  // console.log("Timestamp expired: ", local.timestamp < moment().valueOf());
  //const check = moment().valueOf() > local.timestamp;

  const getData = async () => {
    switch (mediaType) {
      case 'movies':
        await dispatch(fetchMovies());
        break;
      case 'trending':
        await dispatch(fetchTrending());
        break;
      case 'discover':
        await dispatch(fetchDiscoverMovies());
        break;
      case 'tvshows':
        await dispatch(fetchTvShows());
        break;
      default:
        return console.log('Init func criteria not match.');
    }
  };

  await getData();

  dispatch(setTimeStamp());
  dispatch(setLocal());
};

export const setTimeStamp = () => ({
  type: SET_TIMESTAMP,
  payload: moment()
    .add(3, 'm')
    .valueOf()
});

export const setPrevPath = path => ({
  type: SET_PREV_PATH,
  payload: path
});

export const setLocal = () => (dispatch, getState) => {
  localStorage.setItem('moove', JSON.stringify(getState()));
};
