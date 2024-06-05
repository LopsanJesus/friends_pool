import { useTranslation } from "react-i18next";

import Icon from "components/Icon";

import CheckIcon from "assets/check.svg";

const FinalPredictions = () => {
  const { t } = useTranslation();

  return (
    <div className="Predictions__empty">
      <Icon alt="checkmark" src={CheckIcon} color="green" />
      <h3>{t("predictions.finalPredictionsDone")}</h3>
    </div>
  );
};

export default FinalPredictions;
