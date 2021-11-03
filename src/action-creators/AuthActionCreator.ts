import {ActionType} from '@constants/ActionTypes';

export const signInReducer = data => ({
  type: ActionType.LOGIN_SUCCEDED,
  payload: {
    data: data,
  },
});

export const signOutReducer = () => ({
  type: ActionType.LOGOUT_SUCCEDED,
});
