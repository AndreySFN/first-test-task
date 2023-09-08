import { axiosInstance } from './baseApi';
import { StaticInterfaceDataDTO } from './dto';
import { Endpoints } from './endpoints';

export const getStaticInterfaceData = (locale?: string) =>
  axiosInstance
    .get<StaticInterfaceDataDTO>(Endpoints.STATIC_INTERFACE_DATA(locale))
    .then(({ data }) => data);
