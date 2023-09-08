import i18next from 'i18next';
import {
  counterDe,
  counterEn,
  counterRu,
  errorDe,
  errorEn,
  errorRu,
  menuDe,
  menuEn,
  menuRu,
} from 'shared/constants/locales';
import {
  languageChangerDe,
  languageChangerEn,
  languageChangerRu,
} from '../../shared/constants/locales/language-changer';

void i18next.init(
  {
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          menu: menuEn,
          counter: counterEn,
          language: languageChangerEn,
          error: errorEn,
        },
      },
      ru: {
        translation: {
          menu: menuRu,
          counter: counterRu,
          language: languageChangerRu,
          error: errorRu,
        },
      },
      de: {
        translation: {
          menu: menuDe,
          counter: counterDe,
          language: languageChangerDe,
          error: errorDe,
        },
      },
    },
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  },
);
