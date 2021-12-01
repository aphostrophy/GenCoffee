import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ShopSlice from './ShopSlice';

const rootReducer = combineReducers({
  useAuth: AuthReducer,
  useShop: ShopSlice.reducer,
});

export default rootReducer;
