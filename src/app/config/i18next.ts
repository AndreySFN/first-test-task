import i18next from 'i18next';
import {
  counterDe,
  counterEn,
  counterRu,
  counterUk,
  errorDe,
  errorEn,
  errorRu,
  errorUk,
  menuDe,
  menuEn,
  menuRu,
  menuUk,
} from 'shared/constants/locales';
import {
  languageChangerDe,
  languageChangerEn,
  languageChangerRu,
  languageChangerUk,
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
      uk: {
        translation: {
          menu: menuUk,
          counter: counterUk,
          language: languageChangerUk,
          error: errorUk,
        },
      },
    },
  },
  err => {
    if (err) return console.error(err);
  },
);
