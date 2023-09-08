import { Error } from 'entities';
import { t } from 'i18next';

export const Error404 = () => (
  <Error
    header={t('error.error404')}
    caption={t('error.caption404')}
    advice={t('error.advice404')}
  />
);
