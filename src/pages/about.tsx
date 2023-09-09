import { Page } from 'entities';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAbout } from 'shared/api';
import { CounterStates, initCounter } from 'store';

export const About = () => {
  const { result, isLoading } = useGetAbout();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCounter({ state: CounterStates.ABOUT, value: result?.counter }));
  }, [result?.counter]);
  return (
    <Page
      isLoading={isLoading}
      title={result?.title}
      text={result?.text}
      counterState={CounterStates.ABOUT}
    />
  );
};
