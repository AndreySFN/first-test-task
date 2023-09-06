import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { languageSelectors } from '../store/languageSlice';

const ErrprContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
export const Error = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const data = searchParams.get('data');
  const locale = useSelector(languageSelectors.currentLang);
  // TODO: локализация
  return (
    <ErrprContainer>
      <Typography variant="h4">Уууупс... ошибка {status || ''}</Typography>
      <Typography variant="body1">{data || 'неизвестная ошибка'}</Typography>
    </ErrprContainer>
  );
};
