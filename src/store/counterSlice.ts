import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app';

export interface CounterState {
  value: number | null;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: null } as CounterState,
  reducers: {
    initCounter: (state, action: PayloadAction<number>) => {
      state.value ??= action.payload;
    },
    increment: state => {
      state.value ??= 0;
      state.value++;
    },
    decrement: state => {
      state.value ??= 0;
      state.value--;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { initCounter, increment, decrement } = counterSlice.actions;
export const counterSelectors = {
  counter: (state: RootState): number | null => state.counter.value,
};
