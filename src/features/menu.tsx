import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LanguageChanger } from '../entities';

const MenuContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '20px 10px',
});

const Navigation = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
});
export const Menu = () => {
  const navigate = useNavigate();
  const { locale } = useParams();
  //TODO: Локализация
  return (
    <MenuContainer>
      <Navigation>
        <Button variant="text" onClick={() => navigate(`/${locale}`)}>
          home
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/about`)}>
          about
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/info`)}>
          info
        </Button>
      </Navigation>
      <LanguageChanger />
    </MenuContainer>
  );
};
