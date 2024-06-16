import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import useRanking from "hooks/useRanking";
import { useTranslation } from "react-i18next";

const Ranking = () => {
  const { ranking, loading, error } = useRanking();

  const { t } = useTranslation();

  if (error) {
    return <p>Error</p>;
  }

  return (
    <PageWithTopbar className="Ranking" title={t("topbar.ranking")}>
      {loading && <Loader />}

      {!loading &&
        ranking.map((user, index) => (
          <p key={user.userId}>
            {index + 1}. {user.userName} ({user.totalPoints} puntos)
          </p>
        ))}
    </PageWithTopbar>
  );
};

export default Ranking;
