import useGetView from "api/useGetView";

import PageWithTopbar from "components/PageWithTopbar";
import DatabaseError from "pages/ErrorPage";

import { UserType } from "types/types";

import "./style.scss";

const Players = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Users",
  });

  if (error) {
    return (
      <div className="Players">
        <DatabaseError />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="Players">
        <h2>Loading...</h2>
      </div>
    );
  }

  const dataPlayers = data as UserType[];

  return (
    <PageWithTopbar className="Players" title="Players">
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
