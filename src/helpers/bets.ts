import { BetType, MatchType } from "types/types";

export const findNextMatchToBet = (
  dataMatches: MatchType[],
  dataBets: BetType[]
) => {
  return dataMatches.find((match: MatchType) => {
    const correspondingBet = dataBets.find((bet: BetType) => {
      return bet.matchId === match.id;
    });

    return !correspondingBet;
  });
};
