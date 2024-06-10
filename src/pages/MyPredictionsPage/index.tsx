import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";
import useUser from "hooks/useUser";

import LinkButton from "components/LinkButton";
import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import { BetType, FinalBetType } from "types/types";

import "./style.scss";

const MyPredictionsPage = () => {
  const { t } = useTranslation();
  const [dataBets, setDataBets] = useState<BetType[]>([]);
  const [dataFinalBets, setDataFinalBets] = useState<FinalBetType[]>([]);

  const { userPk } = useUser();

  const {
    data: dataFromBets,
    loading: loadingFromBets,
    error: errorFromBets,
  } = useGetView({
    databaseName: "Bets",
    filterByFormula: `User = "${userPk}"`,
  });

  const {
    data: dataFromFinalBets,
    loading: loadingFromFinalBets,
    error: errorFromFinalBets,
  } = useGetView({
    databaseName: "FinalBets",
    filterByFormula: `User = "${userPk}"`,
  });

  useEffect(() => {
    setDataBets(dataFromBets as BetType[]);
    setDataFinalBets(dataFromFinalBets as FinalBetType[]);
  }, [dataFromBets, dataFromFinalBets]);

  if (errorFromBets || errorFromFinalBets) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar
      className="MyPredictionsPage"
      title={t("predictions.myPredictions")}
    >
      {(loadingFromBets || loadingFromFinalBets) && <Loader />}
      {!loadingFromBets && !loadingFromFinalBets && (
        <>
          <div className="finalBets">
            {dataFinalBets.map((finalBet) => (
              <div key={finalBet.id} className="finalBet">
                <div>{t("predictions.betType." + finalBet.betType)}</div>
                <div> - </div>
                <div>{finalBet.betValue}</div>
              </div>
            ))}
          </div>

          <Separator />
          <div className="matchBets">
            {dataBets.map((bet) => (
              <div key={bet.id} className="matchBet">
                <div>
                  {bet.isKeyBet ? "★" : ""} {bet.localTeam} vs {bet.visitorTeam}{" "}
                </div>
                <div>
                  {bet.localScore} - {bet.visitorScore}
                </div>
              </div>
            ))}
          </div>

          {dataBets.length === 0 && (
            <LinkButton linkTo="/predictions/matches" text={t("home.start")} />
          )}

          <Separator />

          <LinkButton
            linkTo="/predictions"
            text={t("buttons.back")}
            variant="secondary"
          />
        </>
      )}
    </PageWithTopbar>
  );
};

export default MyPredictionsPage;
