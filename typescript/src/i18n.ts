// * Base
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// * Locales
import ua from './assets/locale/ua.json';
import en from './assets/locale/en.json';
import pl from './assets/locale/pl.json';

i18n.use(initReactI18next).init({
  resources: {
    ua: { translation: ua },
    en: { translation: en },
    pl: { translation: pl },
  },
  interpolation: { escapeValue: false },
  lng: 'ua',
});
export default i18n;
