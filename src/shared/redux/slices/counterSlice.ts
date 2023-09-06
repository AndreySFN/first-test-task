import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

export interface CounterState {
  value: number | null;
}

const counterSlice = createSlice<CounterState, SliceCaseReducers<CounterState>>({
  name: 'counter',
  initialState: { value: null },
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
//TODO поправить
export const counterSelectors = {
  counter: (state: CounterState): number => state.counter.value,
};
