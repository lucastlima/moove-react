export const FETCH_TRENDING_START = 'FETCH_TRENDING_START';
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS';
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR';
export const SET_FROM_LOCAL = 'SET_FROM_LOCAL';
export const SET_TIMESTAMP = 'SET_TIMESTAMP';

const initialState = {
  loading: false,
  error: null,
  timestamp: 0,
  movies: { loading: false, error: null, trending: [] },
  tvShow: { loading: false, error: null, trending: [] },
  people: { loading: false, error: null, trending: [] }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FROM_LOCAL:
      return payload;

    case SET_TIMESTAMP:
      return { ...state, timestamp: payload };

    case FETCH_TRENDING_START:
      return {
        ...state,
        loading: true,
        movies: { ...state.movies, loading: true },
        tvShow: { ...state.tvShow, loading: true }
      };
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        timestamp: payload.timestamp,
        movies: { ...state.movies, loading: false, trending: payload.movies },
        tvShow: { ...state.tvShow, loading: false, trending: payload.tvShow }
      };
    case FETCH_TRENDING_ERROR:
      return {
        ...state,
        loading: false,
        timestamp: 0,
        movies: { ...state.movies, loading: false, error: payload },
        tvShow: { ...state.tvShow, loading: false, error: payload }
      };
    default:
      return state;
  }
};
