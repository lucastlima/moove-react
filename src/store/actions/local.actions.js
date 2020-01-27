import moment from 'moment';
import { SET_TIMESTAMP } from '../reducers/local.reducer';

import { fetchTrending } from './movies.actions';
import { fetchDiscoverMovies } from './discover.actions';

export const init = () => async (dispatch, getState) => {
  const { local } = getState();

  console.log('Current timestamp: ', local.timestamp);
  console.log('Timestamp expired: ', local.timestamp < moment().valueOf());
  const check = moment().valueOf() > local.timestamp;

  if (check) {
    await dispatch(fetchTrending());
    await dispatch(fetchDiscoverMovies());
  }

  dispatch(setTimeStamp());
  dispatch(setLocal());
};

export const setTimeStamp = () => ({
  type: SET_TIMESTAMP,
  payload: moment()
    .add(3, 'm')
    .valueOf()
});

export const setLocal = () => (dispatch, getState) => {
  localStorage.setItem('moove', JSON.stringify(getState()));
};
