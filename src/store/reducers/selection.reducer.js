export const SET_LOADING = "SET_LOADING";
export const SET_SELECTED = "SET_SELECTED";
export const FETCH_SELECTED_SUCCESS = "FETCH_SELECTED_SUCCESS";
export const FETCH_SELECTED_ERROR = "FETCH_SELECTED_ERROR";

const initialState = {
  loading: true,
  error: null,
  selected: null,
  prevSelections: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SELECTED:
      return {
        ...state,
        selected: payload,
        loading: false
      };
    case FETCH_SELECTED_SUCCESS:
      return {
        ...state,
        selected: { ...payload, media_type: state.selected.media_type },
        prevSelections: [
          ...state.prevSelections,
          { ...payload, media_type: state.selected.media_type }
        ],
        loading: false,
        error: null
      };
    case FETCH_SELECTED_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
