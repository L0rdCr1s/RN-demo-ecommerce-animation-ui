import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sampleShoes} from 'store/utils/fake-data';
import {ShoeType, CartItemType} from 'store/utils/types';

interface StateType {
  shoes: ShoeType[];
  cart: CartItemType[];
}

const initialState: StateType = {
  shoes: sampleShoes,
  cart: [],
};

export const appStateSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addToCart: (state: StateType, action: PayloadAction<CartItemType>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state: StateType, action: PayloadAction<CartItemType>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addToCart, removeFromCart} = appStateSlice.actions;
export default appStateSlice.reducer;
