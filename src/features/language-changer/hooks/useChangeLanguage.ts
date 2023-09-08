import { changeLanguage } from 'i18next';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export const useChangeLanguage = () => {
  const navigate = useNavigate();
  const history = useLocation();
  return (newLocale?: string) => {
    void changeLanguage(newLocale);
    const newPathname = history.pathname.split('/');
    newPathname[1] = newLocale || '';
    navigate(newPathname.join('/'));
  };
};
