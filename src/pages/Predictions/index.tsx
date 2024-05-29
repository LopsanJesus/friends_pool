import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

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

import Loader from "components/Loader";
import "./style.scss";

const Predictions = () => {
  const [nextMatchToBet, setNextMatchToBet] = useState<MatchType>();
  const [dataBets, setDataBets] = useState<BetType[]>([]);
  const [dataMatches, setDataMatches] = useState<MatchType[]>([]);

  const { t } = useTranslation();

  const { userPk, userId, userName } = useUser();

  const {
    data: betsData,
    loading: betsLoading,
    error: betsError,
  } = useGetView({
    databaseName: "Bets",
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
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar
      className="Predictions"
      title={t("predictions.title", { userName })}
    >
      {dataLoading ? (
        <Loader />
      ) : (
        nextMatchToBet && (
          <>
            <div className="Predictions__info">
              <div>{t("matches.group", { group: nextMatchToBet.group })}</div>
              <div>{new Date(nextMatchToBet.date).toLocaleDateString()}</div>
            </div>

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
        <h3>{t("predictions.allMatchesDone")}</h3>
      )}

      <LinkButton linkTo="/" text={t("buttons.back")} variant="secondary" />
    </PageWithTopbar>
  );
};

export default Predictions;
