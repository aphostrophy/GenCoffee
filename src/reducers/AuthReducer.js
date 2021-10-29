import * as ACTION_TYPE from 'constants/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      newState.userToken = action.payload.data;
      return newState;
    case ACTION_TYPE.SIGN_OUT:
      newState.userToken = null;
      return newState;
    default:
      return state;
  }
};
