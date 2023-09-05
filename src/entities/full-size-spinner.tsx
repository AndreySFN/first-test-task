import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const FullSizeSpinnerContainer = styled.div({
  width: '100%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const FullSizeSpinner = () => (
  <FullSizeSpinnerContainer>
    <CircularProgress />
  </FullSizeSpinnerContainer>
);
