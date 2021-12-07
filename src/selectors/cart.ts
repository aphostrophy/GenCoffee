import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@stores/configureStore';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemQuantity = createSelector(
  selectCartItems,
  (_state: RootState, id: string | null | undefined) => id,
  (items, id) => {
    if (id) {
      if (Object.prototype.hasOwnProperty.call(items, id)) {
        return items[id].quantity;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  },
);
