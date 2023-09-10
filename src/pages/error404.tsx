import { Error } from 'entities';
import { t } from 'i18next';

export const Error404 = () => (
  <Error
    header={t('n1:error.error404')}
    caption={t('n1:error.caption404')}
    advice={t('n1:error.advice404')}
  />
);
