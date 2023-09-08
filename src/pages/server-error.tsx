import { Error } from 'entities';
import { t } from 'i18next';
import { useSearchParams } from 'react-router-dom';

export const ServerError = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const data = searchParams.get('data');
  return (
    <Error
      header={t('error.error')
        .concat(' ')
        .concat(status || '')}
      caption={data || t('error.unknownError')}
    />
  );
};
