import { Button, Typography } from '@mui/material';
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
  //TODO: Локализация
  return (
    <CounterContainer>
      <Button
        variant="outlined"
        size="small"
        disabled={!value}
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Typography>counter: {value || '-'}</Typography>
      <Button
        variant="outlined"
        size="small"
        disabled={!value}
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </CounterContainer>
  );
};
