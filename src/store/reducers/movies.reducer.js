export const SET_LOADING = 'SET_LOADING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

const initialState = {
  loading: true,
  error: null,
  trending: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        trending: payload
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
