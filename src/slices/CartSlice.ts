import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ReducedProductData = {
  id: string;
  name: string;
  imagePath: string;
  quantity: number;
};

/**
 * items is an object with product id key and ReducedProductData value.
 */
interface CartState {
  items: Record<string, ReducedProductData>;
  itemCount: number;
}

const CartInitialState = {
  items: {},
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CartInitialState as CartState,
  reducers: {
    clearCart: state => {
      state.items = {};
    },
    addProductToCart: (state, action: PayloadAction<ReducedProductData>) => {
      const { id, name, imagePath, quantity } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        state.items[id].quantity += quantity;
      } else {
        state.items[id] = {
          id,
          name,
          imagePath,
          quantity,
        };
      }
    },
    reduceProductQuantityFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.itemCount--;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity--;
      } else {
        delete state.items[id];
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.itemCount -= state.items[action.payload].quantity;
      delete state.items[action.payload];
    },
  },
});

export const { clearCart, addProductToCart, reduceProductQuantityFromCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice;
