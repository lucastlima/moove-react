export const SET_TIMESTAMP = 'SET_TIMESTAMP';

const initialState = {
  timestamp: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIMESTAMP:
      return { ...state, timestamp: payload };
    default:
      return state;
  }
};
