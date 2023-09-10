import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { errorDe, errorEn, errorRu, errorUk } from '../../shared/constants/locales/erors';

void i18next.use(Backend).init({
  fallbackLng: i18next.language || navigator.language || 'en',
  ns: ['translation', 'n1'],
  backend: {
    loadPath: 'https://test012.lagutin.com/api/lng/{{lng}}/',
  },
  partialBundledLanguages: true,
});
i18next.addResourceBundle('en', 'n1', { error: errorEn });
i18next.addResourceBundle('ru', 'n1', { error: errorRu });
i18next.addResourceBundle('de', 'n1', { error: errorDe });
i18next.addResourceBundle('uk', 'n1', { error: errorUk });
