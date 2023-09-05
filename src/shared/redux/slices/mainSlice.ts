import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAvailableLanguages, getStaticInterfaceData } from '../../api';
import { LangListDTO } from '../../api/dto';
export const fetchStaticInterfaceData = createAsyncThunk(
  'main/fetchStaticInterfaceData',
  async (locale: string) => {
    return await getStaticInterfaceData(locale);
  },
);
export const initApp = createAsyncThunk('main/initApp', async () => {
  return await getAvailableLanguages();
});

export interface MainState {
  counter: number | null;
  title: string | null;
  text: string | null;
  isLoading: boolean;
  langList: Array<LangListDTO>;
  errCode: number | null;
  errMessage: string | null;
}

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    counter: null,
    isLoading: false,
    text: '',
    title: '',
    langList: [],
    errCode: null,
    errMessage: null,
  } as MainState,
  reducers: {
    initCounter: (state, action: PayloadAction<number>) => {
      state.counter ??= action.payload;
    },
    increment: state => {
      state.counter ??= 0;
      state.counter++;
    },
    decrement: state => {
      state.counter ??= 0;
      state.counter--;
    },
  },
  extraReducers: {
    [initApp.pending]: (state: MainState) => {
      state.isLoading = true;
    },
    [initApp.fulfilled]: (state: MainState, action: PayloadAction<LangListDTO>) => {
      state.isLoading = false;
      state.langList = action.payload;
    },
    [initApp.rejected]: (state: MainState) => {
      state.isLoading = false;
    },
    [fetchStaticInterfaceData.pending]: (state: MainState) => {
      state.isLoading = true;
    },
    [fetchStaticInterfaceData.fulfilled]: (
      state: MainState,
      action: PayloadAction<Record<string, string>>,
    ) => {
      state.text = action.payload.text;
      state.title = action.payload.title;
      state.isLoading = false;
    },
    [fetchStaticInterfaceData.rejected]: (state: MainState) => {
      state.isLoading = false;
    },
  },
});

export const mainReducer = mainSlice.reducer;
export const { initCounter, increment, decrement } = mainSlice.actions;
