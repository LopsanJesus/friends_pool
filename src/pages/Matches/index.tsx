import useGetView from "../../api/useGetView";
import { MatchType } from "../../types/types";

import "./style.scss";

const Matches = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Matches",
    view: "Grid view",
  });

  if (error) {
    return (
      <div className="Matches">
        <h2>Error fetching matches</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="Matches">
        <h2>Loading...</h2>
      </div>
    );
  }

  const matchesData = data as MatchType[];

  return (
    <div className="Matches">
      <h2>Matches Page</h2>
      {matchesData &&
        matchesData.map((match: MatchType) => (
          <div key={match.id}>
            <div>
              {match.localTeam} - {match.visitorTeam}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Matches;
