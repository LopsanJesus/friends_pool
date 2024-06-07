import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import Icon from "components/Icon";
import LinkButton from "components/LinkButton";
import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import FinalPredictionsForm from "components/predictions/FinalPredictionsForm";

import useGetView from "api/useGetView";
import { finalBetsKeys } from "config/constants";
import { findNextFinalBet } from "helpers/bets";
import useUser from "hooks/useUser";
import { FinalBetType } from "types/types";

import CheckIcon from "assets/check.svg";

const FinalPredictionsPage = () => {
  const [dataFinalBets, setDataBets] = useState<FinalBetType[]>([]);
  const [nextBetToPlace, setNextBetToPlace] = useState<string>();

  const { t } = useTranslation();

  const { userName, userPk } = useUser();

  const { data, loading, error } = useGetView({
    databaseName: "FinalBets",
    filterByFormula: `User = "${userPk}"`,
  });

  useEffect(() => {
    if (data) {
      setDataBets(data as FinalBetType[]);
    }
  }, [data]);

  useEffect(() => {
    setNextBetToPlace(findNextFinalBet(dataFinalBets, finalBetsKeys));
  }, [dataFinalBets]);

  if (error) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar
      className="FinalPredictionsPage"
      title={t("predictions.title", { userName })}
    >
      {loading && <Loader />}

      {data && nextBetToPlace && !loading && (
        <FinalPredictionsForm
          betType={nextBetToPlace}
          addNewFinalBetInserted={(bet) => setDataBets([...dataFinalBets, bet])}
        />
      )}

      {dataFinalBets.length === finalBetsKeys.length && !loading && (
        <div className="Predictions__empty">
          <Icon alt="checkmark" src={CheckIcon} color="green" />
          <h3>{t("predictions.finalPredictionsDone")}</h3>
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

export default FinalPredictionsPage;
