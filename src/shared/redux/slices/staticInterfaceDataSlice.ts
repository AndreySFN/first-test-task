import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { getStaticInterfaceData } from '../../api';
import { StaticInterfaceDataDTO } from '../../api/dto';

export const fetchStaticInterfaceData = createAsyncThunk(
  'main/fetchStaticInterfaceData',
  async (locale?: string) => {
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
  name: 'staticInterfaceData',
  initialState: {
    counter: null,
    text: '',
    title: '',
    isLoading: false,
  } as StaticInterfaceDataState,
  reducers: {},
  extraReducers: {
    [fetchStaticInterfaceData.pending]: (state: StaticInterfaceDataState) => {
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
    [fetchStaticInterfaceData.rejected]: (state: StaticInterfaceDataState) => {
      state.isLoading = false;
    },
  },
});

export const staticInterfaceReducer = staticInterfaceSlice.reducer;

//TODO типизация, поменять названия
export const staticInterfaceSelectors = {
  text: (state): string => state.staticInterfaceData.text,
  title: (state): string => state.staticInterfaceData.title,
};
