import { useEffect } from "react";
import useInsert from "../../api/useInsert";
import Button from "../../components/Button";

import "./style.scss";

const Rules = () => {
  const { error, insert } = useInsert({
    databaseName: "Bets",
    records: [
      {
        fields: {
          Player_FK: ["rec6StpYNZr5fYi6p"],
          Match_FK: ["recIKvxScd5qPSZlW"],
          BetType: "FG",
          BetValue: "3-1",
        },
      },
      {
        fields: {
          Player_FK: ["recHMLGOOs5lIpOyo"],
          Match_FK: ["recIKvxScd5qPSZlW"],
          BetType: "FG",
          BetValue: "2-2",
        },
      },
    ],
  });

  useEffect(() => {
    console.log("inserting");
    // insert();
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <div className="Rules">
        <h2>Error inserting bets</h2>
      </div>
    );
  }

  return (
    <div className="Rules">
      <h2>Rules Page</h2>
      <button onClick={() => insert()}>Insert</button>
      <Button text="Go Back" linkTo={"/"} variant="secondary" />
    </div>
  );
};

export default Rules;
