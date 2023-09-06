import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { LangDTO } from '../../api/dto';

export interface LanguageSliceState {
  currentLang: string | null;
  langList: Array<LangDTO>;
}

const languageSlice = createSlice<LanguageSliceState, SliceCaseReducers<LanguageSliceState>>({
  name: 'language',
  initialState: {
    langList: [],
    currentLang: null,
  },
  reducers: {
    setCurrentLang: (state, action: PayloadAction<string>) => {
      state.currentLang = action.payload;
    },
    setLangList: (state, action: PayloadAction<Array<LangDTO>>) => {
      state.langList = action.payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLangList, setCurrentLang } = languageSlice.actions;

// TODO Исправить типизацию
export const languageSelectors = {
  langList: (state): Array<LangDTO> => state.language.langList,
  currentLang: (state): string => state.language.currentLang,
};
