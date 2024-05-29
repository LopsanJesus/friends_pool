import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hello: "Hello, {{userName}}",
          home: {
            predictions: "Make your predictions",
            start: "Start",
            rules: "Any doubt about the rules?",
            rulesButton: "Check the rules",
            disconnect: "Disconnect",
          },
        },
      },
      es: {
        translation: {
          hello: "Hola, {{userName}}",
          home: {
            predictions: "Realiza tus predicciones",
            start: "Empezar",
            rules: "¿Aún no tienes claras las reglas?",
            rulesButton: "Consultar las reglas",
            disconnect: "Desconectar",
          },
        },
      },
    },
  });

export default i18n;