import { combineReducers } from "redux";

import testReducer from "./testReducer";
import moviesReducer from "./movies.reducer";
import localReducer from "./local.reducer";
import discoverReducer from "./discover.reducer";
import trendingReducer from "./trending.reducer";
import selectionReducer from "./selection.reducer";
import tvShowsReducer from "./tvshows.reducer";

const rootReducer = combineReducers({
  test: testReducer,
  movies: moviesReducer,
  tvshows: tvShowsReducer,
  discover: discoverReducer,
  trending: trendingReducer,
  local: localReducer,
  selection: selectionReducer
});

export default rootReducer;
