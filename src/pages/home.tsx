import { Page } from 'entities';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetHome } from 'shared/api';
import { initCounter } from 'store';

export const Home = () => {
  const { result, isLoading } = useGetHome();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCounter(result?.counter));
  }, [result?.counter]);
  return <Page title={result?.title} text={result?.text} isLoading={isLoading} />;
};
