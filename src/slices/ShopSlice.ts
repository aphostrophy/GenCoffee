import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';

interface ShopState {
  shop: string | null;
  category: string;
  items: Product[];
}

const ShopInitialState = {
  shop: null,
  category: 'all',
  items: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: ShopInitialState as ShopState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeShop: (state, action: PayloadAction<string>) => {
      state.shop = action.payload;
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.items.concat(action.payload);
    },
    restartProductsBatch: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { changeCategory, changeShop, addProducts, restartProductsBatch } = shopSlice.actions;

export default shopSlice;
