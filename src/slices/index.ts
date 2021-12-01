import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  useAuth: AuthReducer,
});

export default rootReducer;
