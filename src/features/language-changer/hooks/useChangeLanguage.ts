import { changeLanguage } from 'i18next';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export const useChangeLanguage = () => {
  const navigate = useNavigate();
  const history = useLocation();
  return (newLocale?: string) => {
    void changeLanguage(newLocale)
      .then(() => {
        const newPathname = history.pathname.split('/').filter(val => val.length > 0);
        newPathname[0] = newLocale || '';
        navigate('/'.concat(newPathname.join('/')));
      })
      .catch(() => navigate('/error'));
  };
};
