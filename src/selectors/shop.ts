import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@stores/configureStore';

const selectShopItems = (state: RootState) => state.useShop.items;
const selectShopQuery = (state: RootState) => state.useShop.query;

export const selectFilteredShopItems = createSelector(
  selectShopItems,
  selectShopQuery,
  (items, query) => {
    return items.filter(product => {
      if (product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
  },
);
