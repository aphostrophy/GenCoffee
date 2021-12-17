import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, PRODUCT_CATEGORY } from '@types';

export interface ShopState {
  shop: string | null;
  category: PRODUCT_CATEGORY;
  items: Product[];
  query: string;
}

const ShopInitialState = {
  shop: null,
  category: 'all',
  items: [],
  query: '',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: ShopInitialState as ShopState,
  reducers: {
    changeCategory: (state, action: PayloadAction<PRODUCT_CATEGORY>) => {
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
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { changeCategory, changeShop, addProducts, restartProductsBatch, changeQuery } =
  shopSlice.actions;

export default shopSlice;
