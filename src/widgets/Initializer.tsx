import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Outlet, useParams } from 'react-router-dom';
import { FullSizeSpinner } from '../entities/full-size-spinner';
import { getAvailableLanguages } from '../shared/api';
import { setLangList } from '../shared/redux';

export const Initializer = () => {
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
      setIsLoaded(true);
    });
  }, []);
  return isLoaded ? <Outlet /> : <FullSizeSpinner />;
};
