export const SET_LOADING = 'SET_LOADING';
export const DISCOVER_MOVIES_SUCCESS = 'DISCOVER_MOVIES_SUCCESS';
export const DISCOVER_MOVIES_ERROR = 'DISCOVER_MOVIES_ERROR';

const initialState = {
  loading: true,
  error: null,
  movies: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DISCOVER_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: payload
      };
    case DISCOVER_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
