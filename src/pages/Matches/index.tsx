import useGetView from "api/useGetView";

import { MatchType } from "types/types";

import PageWithTopbar from "components/PageWithTopbar";

import "./style.scss";

const Matches = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Matches",
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
    <PageWithTopbar className="Matches" title="Matches">
      {matchesData &&
        matchesData.map((match: MatchType) => (
          <div key={match.id}>
            <div>
              {match.localTeam} - {match.visitorTeam}
            </div>
          </div>
        ))}
    </PageWithTopbar>
  );
};

export default Matches;
