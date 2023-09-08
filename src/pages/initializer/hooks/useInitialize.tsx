import { changeLanguage } from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { getAvailableLanguages } from 'shared/api';
import { setLangList } from 'store';

export const useInitialize = () => {
  const dispatch = useDispatch();
  const { locale } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    void getAvailableLanguages().then(data => {
      dispatch(setLangList(data));
      if (locale) {
        if (!data?.some(lang => lang.lng === locale)) {
          navigate('/404');
        }
      } else {
        if (data?.some(lang => lang.lng === navigator.language)) navigate(`/${navigator.language}`);
        else navigate(data?.find(lang => lang?.lng_default === 1)?.lng || '/error');
      }
      changeLanguage(locale).catch(() => navigate('/error'));
      setIsLoaded(true);
    });
  }, []);
  return { isLoaded };
};
