import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

const CounterContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '0 0 20px 0 ',
});
export const Counter = () => {
  //TODO: Локализация
  return (
    <CounterContainer>
      <Button variant="outlined" size="small">
        -
      </Button>
      <Typography>counter: -</Typography>
      <Button variant="outlined" size="small">
        +
      </Button>
    </CounterContainer>
  );
};
