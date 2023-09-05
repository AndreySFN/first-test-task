import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer, languageReducer, staticInterfaceReducer } from './slices';

const rootReducer = combineReducers({
  staticInterfaceData: staticInterfaceReducer,
  counter: counterReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
