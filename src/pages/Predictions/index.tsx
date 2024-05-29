import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import useGetView from "api/useGetView";
import useInsert from "api/useInsert";

import FlagImage from "components/FlagImage";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";
import PredictionsForm from "components/PredictionsForm";

import useUser from "hooks/useUser";

import { goals } from "types/goals";
import { BetType, MatchType } from "types/types";

import styles from "styles/constants.module.scss";

import "./style.scss";

const Predictions = () => {
  const [nextMatchToBet, setNextMatchToBet] = useState<MatchType>();
  const [dataBets, setDataBets] = useState<BetType[]>([]);
  const [dataMatches, setDataMatches] = useState<MatchType[]>([]);

  const { userPk, userId, userName } = useUser();

  const {
    data: betsData,
    loading: betsLoading,
    error: betsError,
  } = useGetView({
    databaseName: "Bets",
    view: "BetMatch",
    filterByFormula: `User = "${userPk}"`,
  });

  const {
    data: matchesData,
    loading: matchesLoading,
    error: matchesError,
  } = useGetView({
    databaseName: "Matches",
  });

  const {
    insert,
    loading: insertLoading,
    error: insertError,
  } = useInsert({ databaseName: "Bets" });

  const insertPrediction = useCallback(
    (goals: goals) => {
      if (userId && nextMatchToBet?.id) {
        insert([
          {
            fields: {
              User: [userId ?? ""],
              Match: [nextMatchToBet?.id],
              LocalGoals: parseInt(goals.localGoals),
              VisitorGoals: parseInt(goals.visitorGoals),
            },
          },
        ]);
        setDataBets([
          ...dataBets,
          {
            userId,
            matchId: nextMatchToBet?.id,
            localGoals: goals.localGoals,
            visitorGoals: goals.visitorGoals,
          },
        ]);
      }
    },
    [dataBets, insert, nextMatchToBet?.id, userId]
  );

  useEffect(() => {
    setDataBets(betsData as BetType[]);
    setDataMatches(matchesData as MatchType[]);
  }, [betsData, matchesData]);

  useEffect(() => {
    setNextMatchToBet(
      dataMatches.find((match: MatchType) => {
        const correspondingBet = dataBets.find((bet: BetType) => {
          return bet.matchId === match.id;
        });

        return !correspondingBet;
      })
    );
  }, [dataBets, dataMatches]);

  if (betsError || matchesError || insertError) {
    return <Navigate to="/error" replace={true} />;
  }

  if (betsLoading || matchesLoading || insertLoading) {
    return (
      <div className="Predictions">
        <MoonLoader color={styles.primaryColor} />
      </div>
    );
  }

  if (dataMatches.length === 0) {
    return (
      <div className="Predictions">
        <h2>No matches found</h2>
      </div>
    );
  }

  return (
    <PageWithTopbar
      className="Predictions"
      title={`Predicciones de ${userName}`}
    >
      {nextMatchToBet && (
        <div>
          <div className="Predictions__flags">
            <FlagImage country={nextMatchToBet.localTeam} />
            <FlagImage country={nextMatchToBet.visitorTeam} />
          </div>

          <PredictionsForm
            handleSaveGoals={(goals) => {
              insertPrediction(goals);
            }}
          />
        </div>
      )}

      {!nextMatchToBet && <h3>Ya has rellenado todos tus partidos</h3>}

      <LinkButton linkTo="/" text="Volver" variant="secondary" />
    </PageWithTopbar>
  );
};

export default Predictions;
