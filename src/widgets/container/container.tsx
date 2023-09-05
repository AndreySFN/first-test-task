import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Counter } from '../../entities';
import { Menu } from '../../features';
import { fetchLangList, fetchStaticInterfaceData } from '../../shared/redux';

const MainContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Container = () => {
  const dispatch = useDispatch();
  const { locale } = useParams();
  useEffect(() => {
    dispatch(fetchLangList());
  }, []);
  useEffect(() => {
    dispatch(fetchStaticInterfaceData(locale));
  }, [locale]);
  return (
    <MainContainer>
      <>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Menu />
          <Outlet />
        </Box>
        <Counter />
      </>
    </MainContainer>
  );
};
