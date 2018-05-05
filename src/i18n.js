import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enDefault from "./locales/en/default";
import esDefault from "./locales/es/default";

let fallbackLng = "en";
if (process.env.NODE_ENV === "test") fallbackLng = "cimode";

i18n.use(LanguageDetector).init({
  fallbackLng,
  debug: process.env.NODE_ENV === "development",
  resources: {
    en: { translation: enDefault },
    "en-GB": { translation: { color: "Colour" } },
    es: { translation: esDefault }
  }
});

export default i18n;
