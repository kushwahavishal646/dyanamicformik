import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import langSetupOptions from "../localization";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(initReactI18next)
  .init({
    ...langSetupOptions,
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transEmptyNodeValue: '',
    },
  })
  .catch((err) => {
    console.error('Error initializing i18next:', err);
  });

export default i18n;
