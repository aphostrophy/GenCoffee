import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DenormalizedProductData {
  id: string;
  name: string;
  quantity: number;
  options: Record<string, string>;
}

type NormalizedProductData = Omit<DenormalizedProductData, 'id'>;

interface ProductTypeData {
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

      const optionsKeys = Object.keys(options);
      const availableOptions: Record<string, Array<string>> = {};
      const selectedOptions: Record<string, string> = {};

      for (let i = 0; i < optionsKeys.length; i++) {
        const key = optionsKeys[i];
        const arr = [];
        let selected = '';
        for (let j = 0; j < options[key].length; j++) {
          arr.push(options[key][j].option);
          if (options[key][j].selected) {
            selected = options[key][j].option;
          }
        }
        availableOptions[key] = arr;
        selectedOptions[key] = selected;
      }

      console.log(availableOptions);
      console.log(selectedOptions);

      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        let found = false;
        const productTypeData = state.items[id];

        for (let i = 0; i < productTypeData.variants.length; i++) {
          let isEqual = true;
          for (let j = 0; j < optionsKeys.length; j++) {
            const key = optionsKeys[j];
            if (productTypeData.variants[i].options[key] !== selectedOptions[key]) {
              isEqual = false;
            }
          }
          if (isEqual) {
            productTypeData.variants[i].quantity += quantity;
            found = true;
            break;
          }
        }

        if (!found) {
          state.items[id].variants.push({ name, quantity, options: selectedOptions });
        }
      } else {
        state.items[id] = {
          imagePath,
          availableOptions,
          variants: [{ name, quantity, options: selectedOptions }],
        };
      }
    },
    reduceProductQuantityFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.items, id)) {
        state.itemCount--;

        const productTypeData = state.items[id];

        for (let i = 0; productTypeData.variants.length; i++) {}
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.itemCount -= state.items[action.payload].quantity;
      delete state.items[action.payload];
    },
  },
});

export const { clearCart, addProductToCart, reduceProductQuantityFromCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice;
