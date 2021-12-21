import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import shopSlice from './ShopSlice';
import cartSlice from './CartSlice';
import profileSlice from './ProfileSlice';
import orderOngoingSlice from './OrderOngoingSlice';

const appReducer = combineReducers({
  useAuth: AuthReducer,
  useShop: shopSlice.reducer,
  useOngoingOrder: orderOngoingSlice.reducer,
  cart: cartSlice.reducer,
  profile: profileSlice.reducer,
});

export default appReducer;
