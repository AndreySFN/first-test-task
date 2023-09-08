import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  counterReducer,
  CounterState,
  languageReducer,
  LanguageState,
  StaticInterfaceDataState,
  staticInterfaceReducer,
} from 'store';

export interface RootState {
  staticInterfaceData: StaticInterfaceDataState;
  counter: CounterState;
  language: LanguageState;
}

const rootReducer = combineReducers<RootState>({
  staticInterfaceData: staticInterfaceReducer,
  counter: counterReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
