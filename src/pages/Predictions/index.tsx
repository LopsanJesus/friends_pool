import { useEffect } from "react";
import useGetView from "../../api/useGetView";
import { BetType } from "../../types/types";

import "./style.scss";

const Predictions = () => {
  const { data, loading, error } = useGetView({
    databaseName: "Bets",
    view: "Grid view",
  });

  useEffect(() => {
    console.log("Predictions");
  }, []);

  if (error) {
    return (
      <div className="Predictions">
        <h2>Error fetching Predictions</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="Predictions">
        <h2>Loading...</h2>
      </div>
    );
  }

  const dataBets = data as BetType[];

  return (
    <div className="Predictions">
      <h2>Predictions Page</h2>
      {dataBets &&
        dataBets.map((bet: BetType) => (
          <div key={bet.id}>
            <div>{bet.betType}</div>
          </div>
        ))}
    </div>
  );
};

export default Predictions;
