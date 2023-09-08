import { Error } from 'entities';
import i18next from 'i18next';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const ErrprContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
export const ServerError = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const data = searchParams.get('data');
  return (
    <Error
      header={i18next
        .t('error.error')
        .concat(' ')
        .concat(status || '')}
      caption={data || i18next.t('error.unknownError')}
    />
  );
};
