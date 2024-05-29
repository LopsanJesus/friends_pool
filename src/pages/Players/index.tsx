import { Navigate } from "react-router";

import useGetView from "api/useGetView";

import PageWithTopbar from "components/PageWithTopbar";

import { UserType } from "types/types";

import Loader from "components/Loader";

import "./style.scss";

const Players = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Users",
  });

  if (error) {
    return <Navigate to="/error" replace />;
  }

  const dataPlayers = data as UserType[];

  return (
    <PageWithTopbar className="Players" title="Players">
      {loading && <Loader />}

      {dataPlayers &&
        dataPlayers.map((player: UserType) => (
          <div key={player.id} className="Players__player">
            {player.name}
          </div>
        ))}
    </PageWithTopbar>
  );
};

export default Players;
