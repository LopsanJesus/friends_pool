import useRanking from "hooks/useRanking";
import useUser from "hooks/useUser";

import { BetType } from "types/types";

import "./style.scss";

const MatchCardBets = ({ bets }: { bets: BetType[] }) => {
  const { userName } = useUser();
  const { ranking } = useRanking();

  const rankingMap = new Map(ranking.map((r) => [r.userName, r]));

  const sortedBets = [...bets]
    .filter((bet) => bet.userName !== undefined)
    .sort((a, b) => {
      const rankA = rankingMap.get(a.userName!)?.totalPoints ?? 0;
      const rankB = rankingMap.get(b.userName!)?.totalPoints ?? 0;
      return rankB - rankA;
    });

  return (
    <div className="MatchCardBets">
      {sortedBets.map((bet) => {
        const user = rankingMap.get(bet.userName!);

        return (
          <div
            key={bet.id}
            className={userName === bet.userName ? "bet active" : "bet"}
          >
            <div className="user">{bet.userName}</div>
            <div className="result">
              <div className={bet.clasified === "1" ? "clasified" : ""}>
                {bet.localScore}
              </div>
              <div>-</div>
              <div className={bet.clasified === "2" ? "clasified" : ""}>
                {bet.visitorScore}
              </div>
              <div className="key-bet">{bet.isKeyBet && "★"}</div>
            </div>
            <div className="points">{user?.totalPoints}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchCardBets;
