import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deDefault from "./locales/de/translation";
import enDefault from "./locales/en/translation";
import esDefault from "./locales/es/translation";
import trDefault from "./locales/tr/translation";

const fallbackLng = (process.env.NODE_ENV === "test") ? "cimode" : "en";

i18n.use(LanguageDetector).init({
  fallbackLng,
  debug: import.meta.env.DEV,
  resources: {
    de: { translation: deDefault },
    en: { translation: enDefault },
    "en-GB": {
      translation: {
        color: "Colour",
        colorNames: {
          darkgray: "Dark Grey",
          gray: "Grey",
          graypct: "Grey {{pct}}%",
          lightgray: "Light Grey",
        },
        gapcolor: "Gap Colour",
      },
    },
    es: { translation: esDefault },
    tr: { translation: trDefault },
  },
});

export default i18n;
