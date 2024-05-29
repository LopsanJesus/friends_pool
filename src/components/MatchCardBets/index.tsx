import useUser from "hooks/useUser";

import { BetType } from "types/types";

import "./style.scss";

const MatchCardBets = ({ bets }: { bets: BetType[] }) => {
  const { userName } = useUser();

  return (
    <div className="MatchCardBets">
      {bets.map((bet) => (
        <div
          key={bet.id}
          className={userName === bet.userName ? "bet active" : "bet"}
        >
          <div className="user">{bet.userName}</div>
          <div className="result">
            {bet.localGoals} - {bet.visitorGoals}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchCardBets;
