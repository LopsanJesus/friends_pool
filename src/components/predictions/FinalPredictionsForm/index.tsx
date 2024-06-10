import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import Button from "components/Button";
import Loader from "components/Loader";

import useInsert from "api/useInsert";
import { parseApiFinalBet } from "helpers/apiObjectsProcessor";
import useUser from "hooks/useUser";
import { FinalBetType } from "types/types";

import "./style.scss";

interface IProps {
  betType: string;
  addNewFinalBetInserted: (finalBet: FinalBetType) => void;
}

const FinalPredictionsForm = ({ betType, addNewFinalBetInserted }: IProps) => {
  const [input, setInput] = useState("");

  const { t } = useTranslation();
  const { userId } = useUser();

  const { insert, loading, error } = useInsert({ databaseName: "FinalBets" });

  const handleSubmit = () => {
    if (input !== "" && userId) {
      insert(parseApiFinalBet({ userId, betType, betValue: input }));

      addNewFinalBetInserted({
        betType,
        betValue: input,
        userId,
      });

      setInput("");
    }
  };

  if (error) {
    return <Navigate to="/error" replace />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="FinalPredictionsForm">
      <h2>{t(`predictions.betType.${betType}`)}</h2>

      <input type="text" onChange={(e) => setInput(e.target.value)} />

      {input !== "" && (
        <Button text={t("buttons.save")} onClick={() => handleSubmit()} />
      )}
    </div>
  );
};

export default FinalPredictionsForm;
