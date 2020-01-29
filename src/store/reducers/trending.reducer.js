export const SET_LOADING = 'SET_LOADING';
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS';
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR';

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
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        trending: payload
      };
    case FETCH_TRENDING_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
