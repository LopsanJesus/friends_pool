import useMatches from "../../api/useMatches";

import "./style.scss";

const Matches = () => {
  const { matches, loading, error } = useMatches();

  if (loading) {
    return (
      <div className="Matches">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Matches">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  console.log(matches);

  return (
    <div className="Matches">
      <h2>Matches Page</h2>
    </div>
  );
};

export default Matches;
