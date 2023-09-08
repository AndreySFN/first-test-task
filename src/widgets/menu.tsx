import { Button } from '@mui/material';
import { LanguageChanger } from 'features';
import { t } from 'i18next';
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
          {t('menu.home')}
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/about`)}>
          {t('menu.about')}
        </Button>
        <Button variant="text" onClick={() => navigate(`/${locale}/info`)}>
          {t('menu.info')}
        </Button>
      </Navigation>
      <LanguageChanger />
    </MenuContainer>
  );
};
