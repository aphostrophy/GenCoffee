import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGN_OUT} from 'constants/ActionTypes';

import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
  useAuth: AuthReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    AsyncStorage.removeItem('persist:root');
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
