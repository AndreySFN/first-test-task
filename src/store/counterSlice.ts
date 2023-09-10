import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app';

export interface CounterState {
  [CounterStates.ABOUT]?: number | null;
  [CounterStates.HOME]?: number | null;
  [CounterStates.INFO]?: number | null;
}

export enum CounterStates {
  HOME,
  INFO,
  ABOUT,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    [CounterStates.ABOUT]: null,
    [CounterStates.HOME]: null,
    [CounterStates.INFO]: null,
  } as CounterState,
  reducers: {
    initCounter: (state, action: PayloadAction<{ state: CounterStates; value?: number }>) => {
      state[action.payload.state] ??= action.payload.value;
    },
    increment: (state, action: PayloadAction<CounterStates>) => {
      state[action.payload] ??= 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[action.payload]++;
    },
    decrement: (state, action: PayloadAction<CounterStates>) => {
      state[action.payload] ??= 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[action.payload]--;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { initCounter, increment, decrement } = counterSlice.actions;
export const counterSelectors = {
  counter: (counterState: CounterStates) => {
    return (state: RootState): number | null | undefined => state.counter[counterState];
  },
};
