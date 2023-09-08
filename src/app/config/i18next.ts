import i18next from 'i18next';
import { counterDe, counterEn, counterRu, menuDe, menuEn, menuRu } from 'shared/constants/locales';
import {
  languageChangerDe,
  languageChangerEn,
  languageChangerRu,
} from '../../shared/constants/locales/language-changer';

void i18next.init(
  {
    resources: {
      en: {
        translation: {
          menu: menuEn,
          counter: counterEn,
          language: languageChangerEn,
        },
      },
      ru: {
        translation: {
          menu: menuRu,
          counter: counterRu,
          language: languageChangerRu,
        },
      },
      de: {
        translation: {
          menu: menuDe,
          counter: counterDe,
          language: languageChangerDe,
        },
      },
    },
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  },
);
