import { Box, Typography } from '@mui/material';
import { Counter, FullSizeSpinner } from 'entities';
import { useSelector } from 'react-redux';
import { CounterStates, staticInterfaceSelectors } from 'store';
import styled from 'styled-components';

export interface PageProps {
  text?: string;
  title?: string;
  isLoading?: boolean;
  counterState: CounterStates;
}

const CounterContainer = styled.div({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'flex-end',
});
export const Page = ({ title, text, counterState, isLoading = false }: PageProps) => {
  const textTitle = useSelector(staticInterfaceSelectors.text);
  const titleTitle = useSelector(staticInterfaceSelectors.title);
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
      {isLoading ? (
        <FullSizeSpinner />
      ) : (
        <>
          <Typography variant="h5">
            {titleTitle}: {title}
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '5px' }}>
            {textTitle}: {text}
          </Typography>
          <CounterContainer>
            <Counter counterState={counterState} />
          </CounterContainer>
        </>
      )}
    </Box>
  );
};
