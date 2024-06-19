import { useEffect, useMemo, useState } from "react";

import { calculatePoints } from "helpers/ranking";
import { BetType } from "types/types";
import useBets from "./useBets";

type UserRanking = {
  userId: string;
  userName: string;
  totalPoints: number;
  exactMatches: number;
  keyPoints: number;
};

const useRanking = () => {
  const [dataBets, setDataBets] = useState<BetType[]>([]);
  const { bets, loading, error } = useBets();

  useEffect(() => {
    if (bets) {
      setDataBets(bets as BetType[]);
    }
  }, [bets]);

  const ranking = useMemo(() => {
    const userPoints: { [key: string]: UserRanking } = {};

    dataBets.forEach((bet) => {
      const { points, exactMatches, keyPoints } = calculatePoints(bet);

      if (userPoints[bet.userId]) {
        userPoints[bet.userId].totalPoints += points;
        userPoints[bet.userId].exactMatches += exactMatches;
        userPoints[bet.userId].keyPoints += keyPoints;
      } else {
        userPoints[bet.userId] = {
          userId: bet.userId,
          userName: bet.userName || "",
          totalPoints: points,
          exactMatches,
          keyPoints,
        };
      }
    });

    return Object.values(userPoints).sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      if (b.exactMatches !== a.exactMatches) {
        return b.exactMatches - a.exactMatches;
      }
      return b.keyPoints - a.keyPoints;
    });
  }, [dataBets]);

  return {
    ranking,
    loading,
    error,
  };
};

export default useRanking;
