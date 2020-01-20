const initialState = {
  isWorking: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_REDUX':
      return { ...state, isWorking: true };
    default:
      return state;
  }
};
