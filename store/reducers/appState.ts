import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sampleShoes} from 'store/utils/fake-data';
import {ShoeType, CartItemType} from 'store/utils/types';

interface StateType {
  shoes: ShoeType[];
  cart: CartItemType[];
  selectedShoe: ShoeType;
}

const initialState: StateType = {
  shoes: sampleShoes,
  cart: [],
  selectedShoe: sampleShoes[0],
};

export const appStateSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addToCart: (state: StateType, action: PayloadAction<CartItemType>) => {
      // add to cart source code
    },
    removeFromCart: (state: StateType, action: PayloadAction<CartItemType>) => {
      // remove from cart source code
    },
    selectShoe: (state: StateType, action: PayloadAction<ShoeType>) => {
      state.selectedShoe = action.payload;
    },
  },
});

export const {addToCart, removeFromCart, selectShoe} = appStateSlice.actions;
export default appStateSlice.reducer;
