import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderHistory } from '@types';

export interface OrderOngoingState {
  ongoing_order_items: OrderHistory[];
}

const OrderOngoingInitialState = { ongoing_order_items: [] };

const orderOngoingSlice = createSlice({
  name: 'order_ongoing',
  initialState: OrderOngoingInitialState as OrderOngoingState,
  reducers: {
    restartItemsBatch: (state, action: PayloadAction<OrderHistory[]>) => {
      state.ongoing_order_items = action.payload;
    },
  },
});

export const { restartItemsBatch } = orderOngoingSlice.actions;

export default orderOngoingSlice;
