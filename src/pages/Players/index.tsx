import usePlayers from "../../api/usePlayers";

import "./style.scss";

const Players = () => {
  const { players, loading, error } = usePlayers();

  if (loading) {
    return (
      <div className="Players">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Players">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  console.log(players);

  return (
    <div className="Players">
      <h2>Players Page</h2>
    </div>
  );
};

export default Players;
