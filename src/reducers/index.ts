import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionType} from '@constants/ActionTypes';

import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
  useAuth: AuthReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ActionType.LOGOUT_SUCCEDED) {
    AsyncStorage.removeItem('persist:root');
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
