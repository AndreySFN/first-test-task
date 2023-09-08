import { axiosInstance } from './baseApi';
import { LangDTO } from './dto';
import { Endpoints } from './endpoints';

export const getAvailableLanguages = () =>
  axiosInstance.get<Array<LangDTO>>(Endpoints.LANG_LIST()).then(({ data }) => data);
