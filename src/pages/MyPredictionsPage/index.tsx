import useGetView from "api/useGetView";
import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { BetType, FinalBetType } from "types/types";

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
          {dataFinalBets.map((finalBet) => (
            <div key={finalBet.id}>
              <h3>
                {finalBet.betType} - {finalBet.betValue}
              </h3>
            </div>
          ))}

          {dataBets.map((bet) => (
            <div key={bet.id}>
              <p>
                {bet.localTeam} vs {bet.visitorTeam} {bet.localScore} -{" "}
                {bet.visitorScore}
              </p>
            </div>
          ))}
        </>
      )}
    </PageWithTopbar>
  );
};

export default MyPredictionsPage;
