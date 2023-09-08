import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { RootState } from 'app';
import { getStaticInterfaceData, StaticInterfaceDataDTO } from 'shared/api';

export const fetchStaticInterfaceData = createAsyncThunk(
  'main/fetchStaticInterfaceData',
  async (locale: string | undefined) => {
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
  extraReducers: builder => {
    builder.addCase(fetchStaticInterfaceData.pending, (state: StaticInterfaceDataState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchStaticInterfaceData.fulfilled,
      (state: StaticInterfaceDataState, action: PayloadAction<StaticInterfaceDataDTO>) => {
        state.text = action.payload.text;
        state.title = action.payload.title;
        state.isLoading = false;
      },
    );
    builder.addCase(fetchStaticInterfaceData.rejected, (state: StaticInterfaceDataState) => {
      state.isLoading = false;
    });
  },
});

export const staticInterfaceReducer = staticInterfaceSlice.reducer;

export const staticInterfaceSelectors = {
  text: (state: RootState): string | null => state.staticInterfaceData.text,
  title: (state: RootState): string | null => state.staticInterfaceData.title,
};
