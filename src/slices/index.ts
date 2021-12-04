import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import shopSlice from './ShopSlice';
import cartSlice from './CartSlice';

const rootReducer = combineReducers({
  useAuth: AuthReducer,
  useShop: shopSlice.reducer,
  cart: cartSlice.reducer,
});

export default rootReducer;
