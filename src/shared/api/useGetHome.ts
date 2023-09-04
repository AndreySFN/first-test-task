import { useParams } from 'react-router-dom';
import { PageDTO } from './dto';
import { Endpoints } from './endpoints';
import { useApi } from './useApi';

export const useGetHome = () => {
  const { locale } = useParams();
  return useApi<PageDTO>(Endpoints.HOME(locale));
};
