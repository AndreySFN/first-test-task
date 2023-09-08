import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export interface ErrorProps {
  header: string;
  caption: string;
  advice?: string;
}

const ErrorContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
export const Error = ({ advice, header, caption }: ErrorProps) => (
  <ErrorContainer>
    <Typography variant={'h3'}>{header}</Typography>
    <Typography variant="body1">{caption}</Typography>
    {advice && <Typography variant="caption">{advice}</Typography>}
  </ErrorContainer>
);
