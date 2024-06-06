import { useTranslation } from "react-i18next";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import "./style.scss";

const Rules = () => {
  const { t } = useTranslation();

  return (
    <PageWithTopbar className="Rules" title={t("rules.title")}>
      <div className="deadline">
        <p>{t("rules.deadline")}</p>
      </div>

      <div className="match-predictions-rules">
        <p>{t("rules.matchPredictions")}</p>
        <ul>
          <li>{t("rules.onePoint")}</li>
          <li>{t("rules.threePoints")}</li>
          <li>{t("rules.keyBet")}</li>
          <li>{t("rules.maxKeyBetsGroupPhase")}</li>
          <li>{t("rules.maxKeyBetsFinalPhase")}</li>
        </ul>
      </div>

      <div className="final-prediction-rules">
        <p>{t("rules.finalPredictions")}</p>
        <ul>
          <li>{t("rules.points.groupPoolWinner")}</li>
          <li>{t("rules.points.semifinalist1")}</li>
          <li>{t("rules.points.semifinalist2")}</li>
          <li>{t("rules.points.topScorer")}</li>
          <li>{t("rules.points.finalist")}</li>
          <li>{t("rules.points.winner")}</li>
        </ul>
      </div>

      <LinkButton linkTo="/" text={t("buttons.back")} variant="secondary" />
    </PageWithTopbar>
  );
};

export default Rules;
