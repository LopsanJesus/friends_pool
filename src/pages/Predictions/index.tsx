import { useTranslation } from "react-i18next";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";

import "./style.scss";

const Predictions = () => {
  const { userName } = useUser();

  const { t } = useTranslation();

  return (
    <PageWithTopbar
      className="Predictions"
      title={t("predictions.title", { userName })}
    >
      <LinkButton
        linkTo="/rules"
        text={t("predictions.rulesButton")}
        variant="secondary"
      />

      <LinkButton
        linkTo="/predictions/matches"
        text={t("predictions.matchesButton")}
        variant="primary"
      />

      <LinkButton
        linkTo="/predictions/final"
        text={t("predictions.finalButton")}
        variant="primary"
      />

      <LinkButton linkTo="/" text={t("buttons.back")} variant="secondary" />
    </PageWithTopbar>
  );
};

export default Predictions;
