import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import useGetView from "api/useGetView";
import useInsert from "api/useInsert";

import FlagImage from "components/FlagImage";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";
import PredictionsForm from "components/PredictionsForm";

import { getApiBet } from "helpers/apiObjectsProcessor";
import { findNextMatchToBet } from "helpers/bets";

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
        const bet = {
          userId,
          matchId: nextMatchToBet?.id,
          localGoals: goals.localGoals,
          visitorGoals: goals.visitorGoals,
        };

        insert(getApiBet(bet));
        setDataBets([...dataBets, bet]);
      }
    },
    [dataBets, insert, nextMatchToBet?.id, userId]
  );

  useEffect(() => {
    setDataBets(betsData as BetType[]);
    setDataMatches(matchesData as MatchType[]);
  }, [betsData, matchesData]);

  useEffect(() => {
    setNextMatchToBet(findNextMatchToBet(dataMatches, dataBets));
  }, [dataBets, dataMatches]);

  const dataError = useMemo(() => {
    return betsError || matchesError || insertError;
  }, [betsError, insertError, matchesError]);

  const dataLoading = useMemo(() => {
    return betsLoading || matchesLoading || insertLoading;
  }, [betsLoading, insertLoading, matchesLoading]);

  if (dataError) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <PageWithTopbar
      className="Predictions"
      title={`Predicciones de ${userName}`}
    >
      {dataLoading ? (
        <MoonLoader color={styles.primaryColor} />
      ) : (
        nextMatchToBet && (
          <>
            <div className="Predictions__flags">
              <FlagImage country={nextMatchToBet.localTeam} />
              <FlagImage country={nextMatchToBet.visitorTeam} />
            </div>

            <PredictionsForm
              handleSaveGoals={(goals) => {
                insertPrediction(goals);
              }}
            />
          </>
        )
      )}

      {!dataLoading && !nextMatchToBet && (
        <h3>Ya has rellenado todos tus partidos</h3>
      )}

      <LinkButton linkTo="/" text="Volver" variant="secondary" />
    </PageWithTopbar>
  );
};

export default Predictions;
