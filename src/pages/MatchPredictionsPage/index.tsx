import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";

import FlagImage from "components/FlagImage";
import Icon from "components/Icon";
import LinkButton from "components/LinkButton";
import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import MatchPredictionsForm from "components/predictions/MatchPredictionsForm";

import { findNextMatchToBet } from "helpers/bets";

import useUser from "hooks/useUser";

import { BetType, MatchType } from "types/types";

import CheckIcon from "assets/check.svg";

import { maximumGroupPhaseKeyBets } from "config/constants";

const MatchPredictions = () => {
  const [nextMatchToBet, setNextMatchToBet] = useState<MatchType>();
  const [dataBets, setDataBets] = useState<BetType[]>([]);
  const [dataMatches, setDataMatches] = useState<MatchType[]>([]);

  const { t } = useTranslation();

  const { userPk, userName } = useUser();

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

  const addNewBetInserted = (newBet: BetType) => {
    setDataBets([...dataBets, newBet]);
  };

  useEffect(() => {
    setDataBets(betsData as BetType[]);
    setDataMatches(matchesData as MatchType[]);
  }, [betsData, matchesData]);

  useEffect(() => {
    setNextMatchToBet(findNextMatchToBet(dataMatches, dataBets));
  }, [dataBets, dataMatches]);

  const dataError = useMemo(() => {
    return betsError || matchesError;
  }, [betsError, matchesError]);

  const dataLoading = useMemo(() => {
    return betsLoading || matchesLoading;
  }, [betsLoading, matchesLoading]);

  const keyBetsLeft = useMemo(() => {
    return (
      maximumGroupPhaseKeyBets - dataBets.filter((bet) => bet.isKeyBet).length
    );
  }, [dataBets]);

  if (dataError) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar
      className="MatchPredictionsPage"
      title={t("predictions.title", { userName })}
    >
      {dataLoading ? (
        <Loader />
      ) : (
        nextMatchToBet && (
          <>
            <div>
              <p>
                {t("predictions.remainingGroupPhaseKeyBets")}{" "}
                <span>{keyBetsLeft}</span>
              </p>
            </div>

            <div className="Predictions__info">
              <div>{t("matches.group", { group: nextMatchToBet.group })}</div>
              <div>{new Date(nextMatchToBet.date).toLocaleDateString()}</div>
            </div>

            <div className="Predictions__flags">
              <FlagImage country={nextMatchToBet.localTeam} />
              <FlagImage country={nextMatchToBet.visitorTeam} />
            </div>

            <MatchPredictionsForm
              match={nextMatchToBet}
              raiseNewBet={(newBet: BetType) => addNewBetInserted(newBet)}
              isThereKeyBetsLeft={keyBetsLeft > 0}
            />
          </>
        )
      )}

      {!dataLoading && !nextMatchToBet && (
        <div className="Predictions__empty">
          <Icon alt="checkmark" src={CheckIcon} color="green" />
          <h3>{t("predictions.allMatchesDone")}</h3>
        </div>
      )}

      <LinkButton
        linkTo="/predictions"
        text={t("buttons.back")}
        variant="secondary"
      />
    </PageWithTopbar>
  );
};

export default MatchPredictions;
