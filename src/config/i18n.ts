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
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch((err) => {});

export default i18n;
