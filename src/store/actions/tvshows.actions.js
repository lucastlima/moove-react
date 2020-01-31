import mdbFetch from "../../api/tmdb";
import {
  SET_LOADING,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_ERROR
} from "../reducers/tvshows.reducer";

export const fetchTvShows = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING });
    const req = await mdbFetch.get("/tv/popular");
    const res = await req.data;

    dispatch({
      type: FETCH_TVSHOWS_SUCCESS,
      payload: res.results
    });
  } catch (error) {
    dispatch({ type: FETCH_TVSHOWS_ERROR, payload: error });
  }
};
