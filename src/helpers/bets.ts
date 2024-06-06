import { BetType, FinalBetType, MatchType } from "types/types";

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

export const findNextFinalBet = (
  dataBets: FinalBetType[],
  finalBets: string[]
) => {
  return finalBets.find((bet) => {
    return !dataBets.find((item) => item.betType === bet);
  });
};
