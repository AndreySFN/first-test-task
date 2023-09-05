import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { getAvailableLanguages } from '../../api';
import { LangDTO } from '../../api/dto';

export interface LanguageSliceState {
  defaultLang: string;
  langList: Array<LangDTO>;
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
    setLangList: (state, action: PayloadAction<Array<LangDTO>>) => {
      state.langList = action.payload;
      state.defaultLang = action.payload.reduce((acc, langDto) => {
        return langDto.lng_default >= acc?.lng_default ? langDto : acc;
      }, {} as LangDTO).lng;
    },
  },
  extraReducers: {
    [fetchLangList.pending]: (state: LanguageSliceState) => {
      state.isLoading = true;
    },
    [fetchLangList.fulfilled]: (state: LanguageSliceState, action: PayloadAction<LangDTO>) => {
      state.isLoading = false;
      state.langList = action.payload;
    },
    [fetchLangList.rejected]: (state: LanguageSliceState) => {
      state.isLoading = false;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLangList } = languageSlice.actions;

// TODO Исправить типизацию
export const languageSelectors = {
  langList: state => state.language.langList,
};
