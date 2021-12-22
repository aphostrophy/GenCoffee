import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderHistory } from '@types';

export interface OrderState {
  ongoing_order_items: OrderHistory[];
  restart: boolean;
}

const orderInitialState = { ongoing_order_items: [], restart: false };

const orderSlice = createSlice({
  name: 'order_ongoing',
  initialState: orderInitialState as OrderState,
  reducers: {
    restartItemsBatch: (state, action: PayloadAction<OrderHistory[]>) => {
      state.ongoing_order_items = action.payload;
    },
    restartTrigger: (state, action: PayloadAction<boolean>) => {
      state.restart = action.payload;
    },
  },
});

export const { restartItemsBatch, restartTrigger } = orderSlice.actions;

export default orderSlice;
