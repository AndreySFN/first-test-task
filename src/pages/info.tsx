import { Page } from 'entities';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetInfo } from 'shared/api';
import { initCounter } from 'store';

export const Info = () => {
  const { result, isLoading } = useGetInfo();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCounter(result?.counter));
  }, [result?.counter]);
  return <Page isLoading={isLoading} title={result?.title} text={result?.text} />;
};
