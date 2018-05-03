import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enDefault from "./en_default";
import esDefault from "./es_default";

i18n.use(LanguageDetector).init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  resources: {
    en: { translation: enDefault },
    "en-GB": { translation: { color: "Colour" } },
    es: { translation: esDefault }
  }
});

export default i18n;
