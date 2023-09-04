import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Counter } from '../../entities';
import { Menu } from '../../features';

const MainContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Container = () => {
  return (
    <MainContainer>
      <>
        <Box sx={{ width: '100%' }}>
          <Menu />
          <Outlet />
        </Box>
        <Counter />
      </>
    </MainContainer>
  );
};
