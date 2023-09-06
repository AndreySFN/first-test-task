import { axiosInstance } from './baseApi';
import { LangDTO } from './dto';
import { Endpoints } from './endpoints';

export const getAvailableLanguages = (): Promise<Array<LangDTO>> =>
  axiosInstance.get<Array<LangDTO>>(Endpoints.LANG_LIST());
