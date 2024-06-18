import { useTranslation } from "react-i18next";

import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";

import useRanking from "hooks/useRanking";

import "./style.scss";

const Ranking = () => {
  const { ranking, loading, error } = useRanking();

  const { t } = useTranslation();

  if (error) {
    return <p>Error</p>;
  }

  return (
    <PageWithTopbar className="Ranking" title={t("topbar.ranking")}>
      {loading && <Loader />}

      {!loading && (
        <div className="table">
          {ranking.map((user, index) => (
            <div key={user.userId} className="row">
              <div className="rank">{index + 1}</div>
              <div className="user">{user.userName}</div>
              <div className="exact-matches">{user.exactMatches} 3️⃣</div>
              <div className="key-points">{user.keyPoints} ★</div>
              <div className="points">{user.totalPoints}</div>
            </div>
          ))}
        </div>
      )}
    </PageWithTopbar>
  );
};

export default Ranking;
