import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import useGetView from "api/useGetView";

import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";

import { UserType } from "types/types";

import { useEffect, useState } from "react";
import "./style.scss";

const Players = () => {
  const [dataPlayers, setDataPlayers] = useState<UserType[]>([]);

  const { data, loading, error } = useGetView({
    databaseName: "Users",
  });

  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      setDataPlayers(data as UserType[]);
    }
  }, [data]);

  if (error) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar className="Players" title={t("players.title")}>
      {loading && <Loader />}

      {!loading &&
        dataPlayers &&
        dataPlayers.map((player: UserType) => (
          <div
            key={player.id}
            className="Players__player"
            onClick={() => (window.location.href = `/player/${player.name}`)}
          >
            {player.name}
          </div>
        ))}
    </PageWithTopbar>
  );
};

export default Players;
