import mdbFetch from "../../api/tmdb";
import {
  SET_LOADING,
  FETCH_SELECTED_SUCCESS,
  FETCH_SELECTED_ERROR,
  SET_SELECTED
} from "../reducers/selection.reducer";
import { setLocal } from "./local.actions";

export const fetchSelected = s => async (dispatch, getState) => {
  try {
    const { selection } = getState();
    const { prevSelections, selected } = selection;
    const prev = prevSelections.find(e => e.id === selected.id);

    if (prev) {
      dispatch({
        type: SET_SELECTED,
        payload: prev
      });
      dispatch(setLocal());
    } else {
      dispatch({ type: SET_LOADING });

      const req = await mdbFetch.get(`/${s.media_type}/${s.id}`, {
        params: {
          append_to_response: "videos,credits,external_ids,recommendations"
        }
      });
      const res = await req.data;

      dispatch({
        type: FETCH_SELECTED_SUCCESS,
        payload: res
      });
      dispatch(setLocal());
    }
  } catch (error) {
    dispatch({ type: FETCH_SELECTED_ERROR, payload: error });
  }
};

export const setSelected = selected => async (dispatch, getState) => {
  dispatch({
    type: SET_SELECTED,
    payload: selected
  });
  dispatch(setLocal());
};
