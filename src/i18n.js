import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
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
          rules: {
            title: "Euro 2024 Rules",
            onePoint: "By correctly guessing 1X2 you get 1 point.",
            threePoints: "By correctly guessing exact score you get 3 points.",
            deadline:
              "The deadline for filling predictions is Wednesday, 12 June at 23:59",
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
          rules: {
            title: "Reglas del Torneo",
            onePoint: "Por acertar el resultado 1X2 se suma 1 punto.",
            threePoints: "Por acertar el resultado exacto se suman 3 puntos.",
            deadline:
              "El miércoles 12 de junio a las 23:59 se cierran las predicciones.",
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
          rules: {
            title: "Tourenregeln",
            onePoint: "Bei korrekter Vorhersage 1X2 erzielt man 1 Punkt.",
            threePoints: "Bei korrekter Vorhersage erzielt man 3 Punkte.",
            deadline:
              "Die Deadline für die Vorhersagen ist am 12.06.2022 um 23:59",
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
