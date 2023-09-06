import { axiosInstance } from './baseApi';
import { StaticInterfaceDataDTO } from './dto';
import { Endpoints } from './endpoints';

export const getStaticInterfaceData = (locale?: string): Promise<StaticInterfaceDataDTO> =>
  axiosInstance.get<StaticInterfaceDataDTO>(Endpoints.STATIC_INTERFACE_DATA(locale));
