import { Box } from '@mui/material';
import { AppDispatch } from 'app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { fetchStaticInterfaceData } from 'store';
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

export const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { locale } = useParams();
  useEffect(() => {
    void dispatch(fetchStaticInterfaceData(locale));
  }, [locale]);
  return (
    <MainContainer>
      <>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Menu />
          <Outlet />
        </Box>
      </>
    </MainContainer>
  );
};
