import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import Button from "components/Button";
import Loader from "components/Loader";
import Overlay from "components/Overlay";

import { posibleBetScores } from "config/constants";
import { parseApiBet } from "helpers/apiObjectsProcessor";
import { BetType, MatchType } from "types/types";

import useInsert from "api/useInsert";
import useOverlayStorage from "hooks/useOverlayStorage";
import useUser from "hooks/useUser";

import "./style.scss";

interface IProps {
  match: MatchType;
  raiseNewBet: (bet: BetType) => void;
  isThereKeyBetsLeft: boolean;
}

const PredictionsForm = ({
  match,
  raiseNewBet,
  isThereKeyBetsLeft,
}: IProps) => {
  const [goals, setGoals] = useState<{
    localScore: string;
    visitorScore: string;
  }>({
    localScore: "0",
    visitorScore: "0",
  });
  const [keyBetInput, setKeyBetInput] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [clasified, setClasified] = useState<string>("1");

  const { t } = useTranslation();
  const { userId } = useUser();
  const { getOverlayFromStorage, setOverlayToStorage } = useOverlayStorage();

  const { insert, loading, error } = useInsert({ databaseName: "Bets" });

  useEffect(() => {
    if (getOverlayFromStorage()) {
      setShowOverlay(false);
    }
  }, [getOverlayFromStorage]);

  const handleLocalGoalClick = (value: string) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      localScore: value,
    }));
  };

  const handleVisitorGoalClick = (value: string) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      visitorScore: value,
    }));
  };

  const handleSubmit = () => {
    if (userId && match?.id) {
      const bet: BetType = {
        userId,
        matchId: match?.id,
        localScore: goals.localScore,
        visitorScore: goals.visitorScore,
        isKeyBet: keyBetInput !== undefined ? keyBetInput : false,
        clasified: clasified,
      };

      insert(parseApiBet(bet));
      raiseNewBet(bet);

      setGoals({
        localScore: "0",
        visitorScore: "0",
      });

      setKeyBetInput(false);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayToStorage(true);
  };

  if (error) {
    return <Navigate to="/error" replace />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="PredictionsForm">
      <div className="PredictionsForm__content">
        <div className="PredictionsForm__goals">
          {posibleBetScores.map((value) => (
            <div
              key={value}
              onClick={() => handleLocalGoalClick(value)}
              className={`goalsButton ${
                goals.localScore === value ? "active" : ""
              } `}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="PredictionsForm__goals">
          {posibleBetScores.map((value) => (
            <div
              key={value}
              onClick={() => handleVisitorGoalClick(value)}
              className={`goalsButton ${
                goals.visitorScore === value ? "active" : ""
              } `}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="PredictionsForm__clasified">
        Quien se clasifica?
        <select
          value={clasified}
          onChange={(e) => setClasified(e.target.value)}
        >
          <option value="1">{match.localTeam}</option>
          <option value="2">{match.visitorTeam}</option>
        </select>
      </div>

      {isThereKeyBetsLeft && (
        <div
          className={`PredictionsForm__keyBet ${keyBetInput ? "active" : ""}`}
          onClick={() => setKeyBetInput(!keyBetInput)}
        >
          <div>★</div>

          <div>
            {keyBetInput ? t("predictions.keyBet") : t("predictions.normalBet")}{" "}
            {keyBetInput ? "✓" : ""}
          </div>
        </div>
      )}

      <Button text={t("buttons.save")} onClick={() => handleSubmit()} />

      {showOverlay && (
        <Overlay
          message={t("predictions.overlay")}
          onClose={() => closeOverlay()}
        />
      )}
    </div>
  );
};

export default PredictionsForm;
