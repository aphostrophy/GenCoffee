import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';

interface ShopState {
  shop: string | null;
  category: string | null;
  items: Product[];
}

const ShopInitialState = {
  shop: null,
  category: null,
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

export default shopSlice;
