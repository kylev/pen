import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enDefault from "./en_default";
import esDefault from "./es_default";

i18n.use(LanguageDetector).init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  defaultNS: "default",
  resources: {
    en: { default: enDefault },
    "en-GB": { default: { color: "Colour" } },
    es: { default: esDefault }
  }
});

export default i18n;
