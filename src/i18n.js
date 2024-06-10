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
          topbar: {
            profile: "Profile",
            predictions: "Predictions",
            matches: "Matches",
            players: "Players",
            rankings: "Rankings",
          },
          home: {
            predictions: "Make your predictions",
            start: "Start",
            rules: "Any doubt about the rules?",
            rulesButton: "Check the rules",
            disconnect: "Disconnect",
          },
          profile: {
            title: "Profile - {{userName}}",
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
            matchPredictions: "Match predictions",
            onePoint: "If you hit 1X2 result - 1 point",
            threePoints: "If you hit the exact result - 3 points",
            keyBet: "If you hit one key bet★ - double points",
            maxKeyBetsGroupPhase: "Max. 5 key bets in the group phase",
            maxKeyBetsFinalPhase: "Max. 3 key bets in the final phase",
            finalPredictions: "Final predictions",
            points: {
              groupPoolWinner: "Group phase Papaporra winner - 3 points",
              finalist: "Finalist - 10 points",
              winner: "Winner - 15 point",
              topScorer: "Top scorer - 10 point",
              semifinalist1: "Semifinalist 1 - 5 point",
              semifinalist2: "Semifinalist 2 - 5 point",
            },
            deadline:
              "The deadline for filling predictions is Wednesday, 12 June at 23:59",
          },
          predictions: {
            title: "Predictions of {{userName}}",
            rulesButton: "Check the rules",
            matchesButton: "Predictions of matches",
            finalButton: "Final bets",
            myPredictions: "My predictions",
            myPredictionsButton: "My made predictions",
            remainingGroupPhaseKeyBets: "Remaining key bets: ★",
            keyBet: "Key bet",
            normalBet: "Normal bet",
            allMatchesDone: "All matches filled",
            finalPredictionsDone: "Final predictions done",
            betType: {
              semifinalist1: "Semifinalist 1",
              semifinalist2: "Semifinalist 2",
              finalist: "Finalist",
              winner: "Winner",
              topScorer: "Top scorer",
              groupPoolWinner: "Group phase Papaporra winner",
            },
            overlay:
              "Remember that you can check any bet as key bet. You have 5 in group phase",
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
          topbar: {
            profile: "Perfil",
            predictions: "Predicciones",
            matches: "Partidos",
            players: "Participantes",
            rankings: "Clasificación",
          },
          home: {
            predictions: "Realiza tus predicciones",
            start: "Empezar",
            rules: "¿Aún no tienes claras las reglas?",
            rulesButton: "Consultar las reglas",
            disconnect: "Desconectar",
          },
          profile: {
            title: "Perfil - {{userName}}",
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
            matchPredictions: "Predicciones de partidos",
            onePoint: "Por acertar el resultado 1X2 (1 punto)",
            threePoints: "Por acertar el resultado exacto (3 puntos)",
            keyBet: "Por acertar una apuesta clave★ (doble de puntos)",
            maxKeyBetsGroupPhase: "Max. 5 apuestas clave en la fase de grupos",
            maxKeyBetsFinalPhase: "Max. 3 apuestas clave en la fase final",
            finalPredictions: "Predicciones finales",
            points: {
              winner: "Ganador (15 puntos)",
              finalist: "Finalista (10 puntos)",
              semifinalist1: "Semifinalista 1 (5 puntos)",
              semifinalist2: "Semifinalista 2 (5 puntos)",
              topScorer: "Pichichi (10 puntos)",
              groupPoolWinner:
                "Ganador de la fase de grupos de la Papaporra (5 puntos)",
            },
            deadline:
              "El miércoles 12 de junio a las 23:59 se cierran las predicciones.",
          },
          predictions: {
            title: "Predicciones de {{userName}}",
            rulesButton: "Consultar las reglas",
            matchesButton: "Predicciones de partidos",
            finalButton: "Apuestas finales",
            myPredictions: "Mis predicciones",
            myPredictionsButton: "Mis predicciones realizadas",
            remainingGroupPhaseKeyBets: "Apuestas clave restantes: ★",
            keyBet: "Apuesta clave",
            normalBet: "Apuesta normal",
            allMatchesDone: "Partidos rellenos",
            finalPredictionsDone: "Predicciones finales rellenas",
            betType: {
              semifinalist1: "Semifinalista 1",
              semifinalist2: "Semifinalista 2",
              finalist: "Finalista",
              winner: "Ganador",
              topScorer: "Pichichi",
              groupPoolWinner: "Ganador de la fase de grupos de la Papaporra",
            },
            overlay:
              "Recuerda que puedes marcar la apuesta que quieras como apuesta clave. Tienes 5 en toda la fase de grupos.",
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
          topbar: {
            profile: "Profil",
            predictions: "Vorhersagen",
            matches: "Spiele",
            players: "Spieler",
            rankings: "Rangliste",
          },
          home: {
            predictions: "Vorhersagen anlegen",
            start: "Starten",
            rules: "Fragen Sie nach den Regeln?",
            rulesButton: "Regeln prüfen",
            disconnect: "Abmelden",
          },
          profile: {
            title: "Profil - {{userName}}",
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
            matchPredictions: "Vorhersagen von Spielen",
            onePoint: "Von einem Spiel 1X2 (1 Punkt)",
            threePoints: "Von einem Spiel genau (3 Punkte)",
            keyBet: "Von einer Schlüsselbetsche★ (Doppelte Punkte)",
            maxKeyBetsGroupPhase: "Max. 5 Schlüsselbetsche in der Gruppenphase",
            maxKeyBetsFinalPhase: "Max. 3 Schlüsselbetsche in der Finale",
            finalPredictions: "Vorhersagen der Finale",
            points: {
              winner: "Gewinner (15 Punkte)",
              finalist: "Finalist (10 Punkte)",
              semifinalist1: "Semifinalist 1 (5 Punkte)",
              semifinalist2: "Semifinalist 2 (5 Punkte)",
              topScorer: "Top-Spieler (10 Punkte)",
              groupPoolWinner:
                "Gewinner der Gruppenpool der Papaporra (5 Punkte)",
            },
            deadline:
              "Die Deadline für die Vorhersagen ist am 12.06.2022 um 23:59",
          },
          predictions: {
            title: "Vorhersagen von {{userName}}",
            rulesButton: "Regeln prüfen",
            matchesButton: "Vorhersagen von Spiele",
            finalButton: "Finale-Vorhersagen",
            myPredictions: "Vorhersagen von meinen Spielen",
            myPredictionsButton: "Vorhersagen von meinen Spielen",
            remainingGroupPhaseKeyBets: "Verbleibende Schlüsselbetsche: ★",
            keyBet: "Schlüsselbetsche",
            normalBet: "Normalbetsche",
            allMatchesDone: "Alle Spiele ausgeführt",
            finalPredictionsDone: "Finale-Vorhersagen ausgeführt",
            betType: {
              semifinalist1: "Semifinalist 1",
              semifinalist2: "Semifinalist 2",
              finalist: "Finalist",
              winner: "Gewinner",
              topScorer: "Top-Spieler",
              groupPoolWinner: "Gewinner der Gruppenpool der Papaporra",
            },
            overlay:
              "Vergiss nicht, die Schlüsselbetsche, die du als Schlüsselbetsche markierst, als Schlüsselbetsche zu markieren. Du hast 5 in der Gruppenphase.",
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
