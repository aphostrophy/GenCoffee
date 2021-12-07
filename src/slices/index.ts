import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import shopSlice from './ShopSlice';
import cartSlice from './CartSlice';
import profileSlice from './ProfileSlice';

const rootReducer = combineReducers({
  useAuth: AuthReducer,
  useShop: shopSlice.reducer,
  cart: cartSlice.reducer,
  profile: profileSlice.reducer,
});

export default rootReducer;
