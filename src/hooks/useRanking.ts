import { useEffect, useMemo, useState } from "react";

import useGetView from "api/useGetView";
import { calculatePoints } from "helpers/ranking";
import { BetType } from "types/types";

type UserRanking = {
  userId: string;
  userName: string;
  totalPoints: number;
  exactMatches: number;
  keyPoints: number;
};

const useRanking = () => {
  const [dataBets, setDataBets] = useState<BetType[]>([]);

  const {
    data: dataFromBets,
    loading: loadingFromBets,
    error: errorFromBets,
  } = useGetView({
    databaseName: "Bets",
  });

  useEffect(() => {
    if (dataFromBets) {
      setDataBets(dataFromBets as BetType[]);
    }
  }, [dataFromBets]);

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
      // Comparar por totalPoints (primero)
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      // Comparar por exactMatches (segundo)
      if (b.exactMatches !== a.exactMatches) {
        return b.exactMatches - a.exactMatches;
      }
      // Comparar por keyPoints (tercero)
      return b.keyPoints - a.keyPoints;
    });
  }, [dataBets]);

  return {
    ranking,
    loading: loadingFromBets,
    error: errorFromBets,
  };
};

export default useRanking;
