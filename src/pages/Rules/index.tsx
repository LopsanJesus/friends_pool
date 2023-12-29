import useInsert from "../../api/useInsert";

import Button from "../../components/Button";

import "./style.scss";

const Rules = () => {
  const { insert, loading, error, inserted } = useInsert({
    databaseName: "Bets",
  });

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
      <button
        onClick={() =>
          insert([
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
          ])
        }
      >
        {loading ? "Loading..." : inserted ? "Inserted" : "Insert"}
      </button>
      <Button text="Go back" linkTo={"/"} variant="secondary" />
    </div>
  );
};

export default Rules;
