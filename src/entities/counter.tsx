import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelectors, CounterStates, decrement, increment } from 'store';
import styled from 'styled-components';

const CounterContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '0 0 20px 0 ',
});

export interface CounterProp {
  counterState: CounterStates;
}

export const Counter = ({ counterState }: CounterProp) => {
  const dispatch = useDispatch();
  const value = useSelector(counterSelectors.counter(counterState));
  const [disabled, setDisabled] = useState(!Number.isFinite(Number(value)));
  useEffect(() => {
    setDisabled(!Number.isFinite(Number(value)));
  }, [value]);
  return (
    <CounterContainer>
      <Button
        variant="outlined"
        size="small"
        disabled={disabled}
        onClick={() => dispatch(decrement(counterState))}
      >
        -
      </Button>
      <Typography>{disabled ? '-' : value}</Typography>
      <Button
        variant="outlined"
        size="small"
        disabled={disabled}
        onClick={() => dispatch(increment(counterState))}
      >
        +
      </Button>
    </CounterContainer>
  );
};
