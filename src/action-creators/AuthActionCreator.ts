import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '@constants/ActionTypes';

export const signIn = createAction<string>(ActionType.LOGIN_SUCCEDED);

export const signOut = createAction(ActionType.LOGOUT_SUCCEDED);
