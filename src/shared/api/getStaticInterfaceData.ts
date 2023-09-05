import axios from 'axios';
import { StaticInterfaceDataDTO } from './dto';
import { Endpoints } from './endpoints';

export const getStaticInterfaceData = (locale?: string): Promise<StaticInterfaceDataDTO> =>
  axios
    .get<StaticInterfaceDataDTO>(Endpoints.STATIC_INTERFACE_DATA(locale), {
      baseURL: Endpoints.BASE_URL(),
    })
    .then(({ data }) => data);
