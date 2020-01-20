import { combineReducers } from 'redux';

import testReducer from './testReducer';
import movieDB from './movieDB.reducer';

const rootReducer = combineReducers({
  test: testReducer,
  movieDB
});

export default rootReducer;
