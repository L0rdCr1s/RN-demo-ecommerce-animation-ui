import {createSlice} from '@reduxjs/toolkit';

interface AppStateType {
  counter: number;
}

const initialState: AppStateType = {
  counter: 0,
};

export const appStateSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    increaseCounter: (state: AppStateType) => {
      state.counter += 1;
    },
    decreaseCounter: (state: AppStateType) => {
      state.counter -= 1;
    },
  },
});

export const {increaseCounter, decreaseCounter} = appStateSlice.actions;
export default appStateSlice.reducer;
