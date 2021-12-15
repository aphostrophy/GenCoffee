import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extractOptions, getVariantIndex } from '@utils/cart';

interface DenormalizedProductData {
  id: string;
  name: string;
  quantity: number;
  options: Record<string, string>;
}

export type NormalizedProductData = Omit<DenormalizedProductData, 'id'>;

export type CartScreenProductData = NormalizedProductData & { imagePath: string };

export interface ProductTypeData {
  imagePath: string;
  availableOptions: Record<string, Array<string>>;
  variants: Array<NormalizedProductData>;
}

interface AddProductPayload {
  id: string;
  name: string;
  imagePath: string;
  quantity: number;
  options: Record<string, Array<{ option: string; selected: boolean }>>;
}

interface UniqueProductPayload {
  id: string;
  options: Record<string, Array<{ option: string; selected: boolean }>>;
}

interface CartState {
  items: Record<string, ProductTypeData>;
  itemCount: number;
}

const CartInitialState = {
  items: {},
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CartInitialState as CartState,
  reducers: {
    clearCart: state => {
      state.items = {};
      state.itemCount = 0;
    },
    addProductToCart: (state, action: PayloadAction<AddProductPayload>) => {
      const { id, name, imagePath, quantity, options } = action.payload;

      state.itemCount += quantity;

      const [selectedOptions, availableOptions] = extractOptions(options);

      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        const productTypeData = state.items[id];
        const index = getVariantIndex(options, selectedOptions, productTypeData);

        if (index === -1) {
          productTypeData.variants.push({ name, quantity, options: selectedOptions });
        } else {
          state.items[id].variants[index].quantity += quantity;
        }
      } else {
        state.items[id] = {
          imagePath,
          availableOptions,
          variants: [{ name, quantity, options: selectedOptions }],
        };
      }
    },
    reduceProductQuantityFromCart: (state, action: PayloadAction<UniqueProductPayload>) => {
      const { id, options } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        state.itemCount--;
        const [selectedOptions] = extractOptions(options);
        const productTypeData = state.items[id];

        const index = getVariantIndex(options, selectedOptions, productTypeData);

        if (index !== -1) {
          productTypeData.variants[index].quantity--;
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<UniqueProductPayload>) => {
      const { id, options } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        const productTypeData = state.items[id];
        const [selectedOptions] = extractOptions(options);

        const index = getVariantIndex(options, selectedOptions, productTypeData);

        if (index !== -1) {
          state.itemCount -= productTypeData.variants[index].quantity;
          productTypeData.variants = productTypeData.variants.splice(index, 1);
          if (productTypeData.variants.length === 0) {
            delete state.items[id];
          }
        }
      }
    },
  },
});

export const { clearCart, addProductToCart, reduceProductQuantityFromCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice;
