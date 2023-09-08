import { Button, Typography } from '@mui/material';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelectors, decrement, increment } from 'store';
import styled from 'styled-components';

const CounterContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '0 0 20px 0 ',
});
export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(counterSelectors.counter);
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
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Typography>
        {i18next.t('counter.counter')}: {disabled ? '-' : value}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        disabled={disabled}
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </CounterContainer>
  );
};
