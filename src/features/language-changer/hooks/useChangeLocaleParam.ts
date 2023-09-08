import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export const useChangeLocaleParam = () => {
  const navigate = useNavigate();
  const history = useLocation();
  return (newLocale?: string) => {
    const newPathname = history.pathname.split('/').filter(val => val.length > 0);
    newPathname[0] = newLocale || '';
    navigate(newPathname.join('/'));
  };
};
