import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ErrorLayout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
export const Error404 = () => {
  return (
    <ErrorLayout>
      <Typography variant={'h3'}>Ууууупс... 404</Typography>
      <Typography variant="body1">Кажется вы попали на несуществующую страницу</Typography>
      <Typography variant="caption">Проверьте правильность введённого URL</Typography>
    </ErrorLayout>
  );
};
