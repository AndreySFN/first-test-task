import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { LangDTO } from '../../api/dto';

export interface LanguageSliceState {
  defaultLang: string;
  langList: Array<LangDTO>;
  errCode: number | null;
  errMessage: string | null;
}

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
});

export const languageReducer = languageSlice.reducer;
export const { setLangList } = languageSlice.actions;

// TODO Исправить типизацию
export const languageSelectors = {
  langList: (state): Array<LangDTO> => state.language.langList,
  isLoading: (state): boolean => state.language.isLoading,
};
