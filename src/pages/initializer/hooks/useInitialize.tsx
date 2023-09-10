import { changeLanguage } from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { getAvailableLanguages } from 'shared/api';
import { setLangList } from 'store';
import { Pathes } from 'app/routing';

export const useInitialize = () => {
  const dispatch = useDispatch();
  const { locale } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    void getAvailableLanguages().then(async data => {
      dispatch(setLangList(data));
      const preferLocale = data?.find(lang => lang.lng === locale)?.lng;
      const userLocale = data?.find(lang => lang.lng === navigator.language)?.lng;
      const defaultLocale = data?.find(lang => Number(lang?.lng_default) === 1)?.lng;
      if (locale) {
        if (preferLocale) {
          await changeLanguage(preferLocale).catch(() => navigate(`/${Pathes.ERROR}`));
        } else {
          await changeLanguage(userLocale || defaultLocale).catch(() =>
            navigate(`${Pathes.ERROR}`),
          );
          navigate(`${userLocale || defaultLocale || 'unknown'}/${Pathes.ERROR_404}`);
        }
      } else {
        navigate(userLocale || defaultLocale || `/${Pathes.UNKNOWN_ERROR}`);
      }
      setIsLoaded(true);
    });
  }, []);
  return { isLoaded };
};
