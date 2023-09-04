import { useParams } from 'react-router-dom';
import { PageDTO } from './dto';
import { Endpoints } from './endpoints';
import { useApi } from './useApi';

export const useGetAbout = () => {
  const { locale } = useParams();
  return useApi<PageDTO>(Endpoints.ABOUT(locale));
};
