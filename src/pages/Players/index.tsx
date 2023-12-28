import useGetView from "../../api/useGetView";
import { PlayerType } from "../../types/types";

import "./style.scss";

const Players = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Players",
    view: "Grid view",
  });

  if (error) {
    return (
      <div className="Players">
        <h2>Error fetching players</h2>
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

  const dataPlayers = data as PlayerType[];

  return (
    <div className="Players">
      <h2>Players Page</h2>
      {dataPlayers &&
        dataPlayers.map((player: PlayerType) => (
          <div key={player.id}>
            <div>{player.name}</div>
          </div>
        ))}
    </div>
  );
};

export default Players;
