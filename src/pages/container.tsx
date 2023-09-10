import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'widgets';

const MainContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Container = () => (
  <MainContainer>
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Menu />
        <Outlet />
      </Box>
    </>
  </MainContainer>
);
