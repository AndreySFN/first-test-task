import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../entities';
import { useGetAbout } from '../shared/api';
import { initCounter } from '../store';

export const About = () => {
  const { result, isLoading } = useGetAbout();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCounter(result?.counter));
  }, [result?.counter]);
  return <Page isLoading={isLoading} text={result?.text} title={result?.title} />;
};
