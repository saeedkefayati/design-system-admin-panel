import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "~/locale/en.json";
import fa from "~/locale/fa.json";
import { getStorageItem } from "~/util/storage";

const lng = getStorageItem("lang");

export const resources = {
  fa: { translation: fa },
  en: { translation: en },
};

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: import.meta.env.DEV,
    lng: lng || "fa",
    fallbackLng: ["fa", "en"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18next;
