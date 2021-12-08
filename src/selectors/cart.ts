import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@stores/configureStore';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemQuantity = createSelector(
  selectCartItems,
  (_state: RootState, id: string | null | undefined) => id,
  (items, id) => {
    if (id) {
      if (Object.prototype.hasOwnProperty.call(items, id)) {
        let quantity = 0;
        for (let i = 0; i < items[id].variants.length; i++) {
          quantity += items[id].variants[i].quantity;
        }

        return quantity;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  },
);
