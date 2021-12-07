import { createReducer } from '@reduxjs/toolkit';

import { signIn, signOut } from '@action-creators/AuthActionCreator';

export interface AuthState {
  userToken: null | string;
}

const initialState: AuthState = {
  userToken: null,
};

const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(signIn, (state, action) => {
      state.userToken = action.payload;
    })
    .addCase(signOut, state => {
      state.userToken = null;
    });
});

export default authReducer;
