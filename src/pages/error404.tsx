import { Error } from 'entities';
import i18next from 'i18next';

export const Error404 = () => (
  <Error
    header={i18next.t('error.error404')}
    caption={i18next.t('error.caption404')}
    advice={i18next.t('error.advice404')}
  />
);
