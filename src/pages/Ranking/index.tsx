import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import useRanking from "hooks/useRanking";

import "./style.scss";

const Ranking = () => {
  const { ranking, loading, error } = useRanking();

  const { t } = useTranslation();

  if (error) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar className="Ranking" title={t("ranking.title")}>
      {loading && <Loader />}
      <>
        {!loading && (
          <div className="table">
            {ranking.map((user, index) => (
              <div key={user.userId} className="row">
                <div className="rank">{index + 1}</div>
                <div className="user">{user.userName}</div>
                <div className="exact-matches">3️⃣ {user.exactMatches}</div>
                <div className="key-points">★ {user.keyPoints}</div>
                <div className="points">{user.totalPoints}</div>
              </div>
            ))}
          </div>
        )}

        <Separator />

        <div>{t("ranking.exactResultsLegend")}</div>
        <div>{t("ranking.keyPointsLegend")}</div>
      </>
    </PageWithTopbar>
  );
};

export default Ranking;
