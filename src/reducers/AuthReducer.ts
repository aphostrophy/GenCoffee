import {ActionType} from '@constants/ActionTypes';

const initialState = {
  userToken: null,
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ActionType.LOGIN_SUCCEDED:
      newState.userToken = action.payload.data;
      return newState;
    default:
      return state;
  }
};
