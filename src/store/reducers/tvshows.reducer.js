export const SET_LOADING = "SET_LOADING";
export const FETCH_TVSHOWS_SUCCESS = "FETCH_TVSHOWS_SUCCESS";
export const FETCH_TVSHOWS_ERROR = "FETCH_TVSHOWS_ERROR";

const initialState = {
  loading: true,
  error: null,
  tvshows: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_TVSHOWS_SUCCESS:
      console.log("fetchTVShows");

      return {
        ...state,
        loading: false,
        tvshows: payload
      };
    case FETCH_TVSHOWS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
