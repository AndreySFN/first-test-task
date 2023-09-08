import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { RootState } from 'app';
import { LangDTO } from 'shared/api';

export interface LanguageState {
  langList: Array<LangDTO>;
}

const languageSlice = createSlice<LanguageState, SliceCaseReducers<LanguageState>>({
  name: 'language',
  initialState: {
    langList: [],
  },
  reducers: {
    setLangList: (state, action: PayloadAction<Array<LangDTO>>) => {
      state.langList = action.payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLangList } = languageSlice.actions;

export const languageSelectors = {
  langList: (state: RootState): Array<LangDTO> => state.language.langList,
};
