import i18next from 'i18next';
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
    //TODO вынести куда-нибудь
    void getAvailableLanguages().then(langList => {
      dispatch(setLangList(langList));
      if (locale) {
        if (!langList.some(lang => lang.lng === locale)) {
          navigate('/404');
        }
      } else {
        if (langList.some(lang => lang.lng === navigator.language))
          navigate(`/${navigator.language}`);
        else navigate(langList?.find(lang => lang?.lng_default === 1).lng);
      }
      i18next.changeLanguage(locale);
      setIsLoaded(true);
    });
  }, []);
  return { isLoaded };
};
