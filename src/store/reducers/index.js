import { combineReducers } from 'redux';

import testReducer from './testReducer';
import moviesReducer from './movies.reducer';
import localReducer from './local.reducer';
import discoverReducer from './discover.reducer';

const rootReducer = combineReducers({
  test: testReducer,
  movies: moviesReducer,
  discover: discoverReducer,
  local: localReducer
});

export default rootReducer;
