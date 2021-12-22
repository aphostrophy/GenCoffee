import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderHistory } from '@types';

export interface OrderState {
  ongoing_orders: OrderHistory[];
  history_orders: OrderHistory[];
}

const orderInitialState = { ongoing_orders: [], history_orders: [] };

const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitialState as OrderState,
  reducers: {
    restartOngoingBatch: (state, action: PayloadAction<OrderHistory[]>) => {
      state.ongoing_orders = action.payload;
    },
    restartHistoryBatch: (state, action: PayloadAction<OrderHistory[]>) => {
      state.history_orders = action.payload;
    },
  },
});

export const { restartOngoingBatch, restartHistoryBatch } = orderSlice.actions;

export default orderSlice;
