import { Page } from 'entities';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetHome } from 'shared/api';
import { CounterStates, initCounter } from 'store';

export const Home = () => {
  const { result, isLoading } = useGetHome();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCounter({ state: CounterStates.HOME, value: result?.counter }));
  }, [result?.counter]);
  return (
    <Page
      isLoading={isLoading}
      title={result?.title}
      text={result?.text}
      counterState={CounterStates.HOME}
    />
  );
};
