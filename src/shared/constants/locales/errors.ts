interface ErrorLangType {
  error: string;
  unknownError: string;
  error404: string;
  caption404: string;
  advice404: string;
}

export const errorEn: ErrorLangType = {
  error: 'Woooops... error',
  unknownError: 'unknown error',
  error404: 'Woooops... error 404',
  caption404: 'Page not found',
  advice404: 'Check the correctness of the entered URL',
};
export const errorRu: ErrorLangType = {
  error: 'Уууупс... ошибка ',
  unknownError: 'неизвестная ошибка',
  error404: 'Уууупс... ошибка 404',
  caption404: 'Кажется вы попали на несуществующую страницу',
  advice404: 'Проверьте правильность введённого URL',
};
export const errorDe: ErrorLangType = {
  error: 'Uuuops... Fehler',
  unknownError: 'unbekannter Fehler',
  error404: 'Uuuops... fehler 404',
  caption404: 'Sie scheinen auf eine nicht vorhandene Seite gelangt zu sein',
  advice404: 'Überprüfen Sie, ob die eingegebene URL korrekt ist',
};
