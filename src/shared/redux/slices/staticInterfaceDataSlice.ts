import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { getStaticInterfaceData } from '../../api';
import { StaticInterfaceDataDTO } from '../../api/dto';

export const fetchStaticInterfaceData = createAsyncThunk(
  'main/fetchStaticInterfaceData',
  async (locale: string) => {
    return await getStaticInterfaceData(locale);
  },
);

export interface StaticInterfaceDataState {
  counter: number | null;
  title: string | null;
  text: string | null;
  isLoading: boolean;
}

const staticInterfaceSlice = createSlice<
  StaticInterfaceDataState,
  SliceCaseReducers<StaticInterfaceDataState>
>({
  name: 'main',
  initialState: {
    counter: null,
    text: '',
    title: '',
    isLoading: false,
  } as StaticInterfaceDataState,
  reducers: {},
  extraReducers: {
    [fetchStaticInterfaceData.pending]: state => {
      state.isLoading = true;
    },
    [fetchStaticInterfaceData.fulfilled]: (
      state: StaticInterfaceDataState,
      action: PayloadAction<StaticInterfaceDataDTO>,
    ) => {
      state.text = action.payload.text;
      state.title = action.payload.title;
      state.isLoading = false;
    },
    [fetchStaticInterfaceData.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const staticInterfaceReducer = staticInterfaceSlice.reducer;
