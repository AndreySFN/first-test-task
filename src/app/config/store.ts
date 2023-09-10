import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer, CounterState, languageReducer, LanguageState } from 'store';

export interface RootState {
  counter: CounterState;
  language: LanguageState;
}

const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
