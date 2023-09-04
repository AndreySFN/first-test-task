import axios from 'axios';
import { LangListDTO } from './dto';
import { Endpoints } from './endpoints';

export const getAvailableLanguages = (): Promise<LangListDTO> =>
  axios
    .get<LangListDTO>(Endpoints.LANG_LIST(), {
      baseURL: Endpoints.BASE_URL(),
    })
    .then(({ data }) => data);
