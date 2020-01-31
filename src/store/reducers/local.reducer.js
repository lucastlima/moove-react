export const SET_TIMESTAMP = 'SET_TIMESTAMP';
export const SET_PREV_PATH = 'SET_PREV_PATH';

const initialState = {
  timestamp: 0,
  prevPath: '/trending'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIMESTAMP:
      return { ...state, timestamp: payload };
    case SET_PREV_PATH:
      return { ...state, prevPath: payload };
    default:
      return state;
  }
};
