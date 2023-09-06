import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export const useChangeLocaleParam = () => {
  const navigate = useNavigate();
  const history = useLocation();
  return (newLocale?: string) => {
    const newPathname = history.pathname.split('/');
    newPathname[1] = newLocale || '';
    navigate(newPathname.join('/'));
  };
};
