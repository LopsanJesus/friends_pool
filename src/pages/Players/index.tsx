import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import useGetView from "api/useGetView";

import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";

import { UserType } from "types/types";

import "./style.scss";

const Players = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Users",
  });

  const { t } = useTranslation();

  if (error) {
    return <Navigate to="/error" replace />;
  }

  const dataPlayers = data as UserType[];

  return (
    <PageWithTopbar className="Players" title={t("players.title")}>
      {loading && <Loader />}

      {!loading &&
        dataPlayers &&
        dataPlayers.map((player: UserType) => (
          <div key={player.id} className="Players__player">
            {player.name}
          </div>
        ))}
    </PageWithTopbar>
  );
};

export default Players;
