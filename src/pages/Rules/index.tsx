import { useTranslation } from "react-i18next";

import PageWithTopbar from "components/PageWithTopbar";

import "./style.scss";

const Rules = () => {
  const { t } = useTranslation();

  return (
    <PageWithTopbar className="Rules" title={t("rules.title")}>
      <div className="deadline">
        <p>{t("rules.deadline")}</p>
      </div>

      <div className="point-rules">
        <ul>
          <li>{t("rules.onePoint")}</li>
          <li>{t("rules.threePoints")}</li>
        </ul>
      </div>
    </PageWithTopbar>
  );
};

export default Rules;
