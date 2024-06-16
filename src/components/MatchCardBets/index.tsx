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
            <div>{bet.localScore}</div>
            <div>-</div>
            <div>{bet.visitorScore}</div>
            <div className="key-bet">{bet.isKeyBet && "★"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchCardBets;
