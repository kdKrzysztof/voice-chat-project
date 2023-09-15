import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;