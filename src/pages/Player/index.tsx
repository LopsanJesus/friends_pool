import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import useGetView from "api/useGetView";

import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import LinkButton from "components/LinkButton";
import { FinalBetType, UserInfoType } from "types/types";

import flags from "config/flags";
import "./style.scss";

const Player = () => {
  const [userData, setUserData] = useState<UserInfoType>();
  const [finalBets, setFinalBets] = useState<FinalBetType[]>();

  const { name } = useParams();

  const { t } = useTranslation();

  const {
    data: dataUserInfos,
    loading: loadingUserInfos,
    error: errorUserInfos,
  } = useGetView({
    databaseName: "UserInfos",
    filterByFormula: `UserName = "${name}"`,
  });

  const {
    data: dataFinalBets,
    loading: loadingFinalBets,
    error: errorFinalBets,
  } = useGetView({
    databaseName: "FinalBets",
    filterByFormula: `UserName = "${name}"`,
  });

  useEffect(() => {
    if (dataUserInfos) {
      setUserData(dataUserInfos[0] as UserInfoType);
    }
  }, [dataUserInfos]);

  useEffect(() => {
    if (dataFinalBets) {
      setFinalBets(dataFinalBets as FinalBetType[]);
    }
  }, [dataFinalBets]);

  if (errorUserInfos || errorFinalBets) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar className="Profile" title={name}>
      <div className="user-info">
        {loadingUserInfos && <Loader />}
        {!loadingUserInfos && dataUserInfos && (
          <>
            <div className="infoType">Apuesta</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.bet}</div>

            <div className="infoType">Orientación</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.orientation}</div>

            <div className="infoType">Religión</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.religion}</div>

            <div className="infoType">Dinero en la cuenta</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.moneyInBank}</div>

            <div className="infoType">Jugador favorito de Africa</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.favoriteAfricaPlayer}</div>
          </>
        )}
      </div>

      <Separator />

      <div className="final-bets">
        {loadingFinalBets && <Loader />}
        {!loadingFinalBets &&
          dataFinalBets &&
          flags.showParticipantFinalBets && (
            <>
              {finalBets?.map((finalBet) => (
                <div key={finalBet.id} className="final-bet">
                  <div className="infoType">{finalBet.betType}</div>
                  <div className="dash">-</div>
                  <div className="infoValue">{finalBet.betValue}</div>
                </div>
              ))}
              {finalBets?.length === 0 && (
                <>
                  <div>No hay apuestas aún</div>
                </>
              )}
            </>
          )}
      </div>

      <LinkButton
        linkTo="/players"
        text={t("buttons.back")}
        variant="secondary"
      />
    </PageWithTopbar>
  );
};

export default Player;
