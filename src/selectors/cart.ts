import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@stores/configureStore';
import type { CartScreenProductData } from '@slices/CartSlice';

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

export const selectNormalizedCartItems = createSelector(
  selectCartItems,
  (items): CartScreenProductData[] => {
    const normalizedCartItems = [];
    const keys = Object.keys(items);
    for (let i = 0; i < keys.length; i++) {
      const productTypeData = { ...items[keys[i]] };
      const imagePath = productTypeData.imagePath;
      const id = keys[i];
      for (let j = 0; j < productTypeData.variants.length; j++) {
        normalizedCartItems.push({ ...productTypeData.variants[j], imagePath, id });
      }
    }
    return normalizedCartItems;
  },
);
