import axios from 'axios';
import { LangDTO } from './dto';
import { Endpoints } from './endpoints';

export const getAvailableLanguages = (): Promise<Array<LangDTO>> =>
  axios
    .get<Array<LangDTO>>(Endpoints.LANG_LIST(), {
      baseURL: Endpoints.BASE_URL(),
    })
    .then(({ data }) => data);
