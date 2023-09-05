import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { getAvailableLanguages } from '../../api';
import { LangListDTO } from '../../api/dto';

export interface LanguageSliceState {
  langList: Array<LangListDTO>;
  errCode: number | null;
  errMessage: string | null;
}

export const fetchLangList = createAsyncThunk('language/fetchLangList', async () => {
  return await getAvailableLanguages();
});

const languageSlice = createSlice<LanguageSliceState, SliceCaseReducers<LanguageSliceState>>({
  name: 'language',
  initialState: {
    langList: [],
    errCode: null,
    errMessage: null,
  },
  reducers: {
    setLangList: (state, action: PayloadAction<Array<LangListDTO>>) => {
      state.langList = action.payload;
    },
  },
  extraReducers: {
    [fetchLangList.pending]: state => {
      state.isLoading = true;
    },
    [fetchLangList.fulfilled]: (state, action: PayloadAction<LangListDTO>) => {
      state.isLoading = false;
      state.langList = action.payload;
    },
    [fetchLangList.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLangList } = languageSlice.actions;
