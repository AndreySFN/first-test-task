import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import { LanguageChanger } from 'features';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '10px 10px',
  borderBottom: '1px solid #1976d2',
});

const Navigation = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
});
export const Menu = () => {
  const navigate = useNavigate();
  const { locale } = useParams();
  return (
    <MenuContainer>
      <Navigation>
        <Button variant="text" onClick={() => navigate(`/${locale}`)}>
          <HomeIcon />
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/about`)}>
          <PeopleIcon />
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/info`)}>
          <InfoIcon />
        </Button>
      </Navigation>
      <LanguageChanger />
    </MenuContainer>
  );
};
