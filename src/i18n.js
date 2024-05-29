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
          welcome: "Welcome, {{userName}}",
          home: {
            predictions: "Make your predictions",
            start: "Start",
            rules: "Any doubt about the rules?",
            rulesButton: "Check the rules",
            disconnect: "Disconnect",
          },
          matches: {
            title: "Matches",
            group: "Group {{group}}",
          },
          players: {
            title: "Players",
          },
          predictions: {
            title: "Predictions of {{userName}}",
            allMatchesDone: "You have filled all your matches",
          },
          logout: {
            title: "Session closed",
          },
          buttons: {
            save: "Save",
            back: "Back",
            access: "Access",
            home: "Home",
          },
        },
      },
      es: {
        translation: {
          hello: "Hola, {{userName}}",
          welcome: "Bienvenido, {{userName}}",
          home: {
            predictions: "Realiza tus predicciones",
            start: "Empezar",
            rules: "¿Aún no tienes claras las reglas?",
            rulesButton: "Consultar las reglas",
            disconnect: "Desconectar",
          },
          matches: {
            title: "Partidos",
            group: "Grupo {{group}}",
          },
          players: {
            title: "Participantes",
          },
          predictions: {
            title: "Predicciones de {{userName}}",
            allMatchesDone: "Ya has rellenado todos tus partidos",
          },
          logout: {
            title: "Sesión cerrada",
          },
          buttons: {
            save: "Guardar",
            back: "Volver",
            access: "Acceder",
            home: "Inicio",
          },
        },
      },
      de: {
        translation: {
          hello: "Hallo, {{userName}}",
          welcome: "Willkommen, {{userName}}",
          home: {
            predictions: "Vorhersagen anlegen",
            start: "Starten",
            rules: "Fragen Sie nach den Regeln?",
            rulesButton: "Regeln prüfen",
            disconnect: "Abmelden",
          },
          matches: {
            title: "Spiele",
            group: "Gruppe {{group}}",
          },
          players: {
            title: "Spieler",
          },
          predictions: {
            title: "Vorhersagen von {{userName}}",
            allMatchesDone: "Du hast alle deine Spiele ausgeführt",
          },
          logout: {
            title: "Sitzung beendet",
          },
          buttons: {
            save: "Speichern",
            back: "Zurück",
            access: "Zugriff",
            home: "Start",
          },
        },
      },
    },
  });

export default i18n;
