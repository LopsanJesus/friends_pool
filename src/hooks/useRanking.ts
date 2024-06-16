import { useEffect, useMemo, useState } from "react";

import useGetView from "api/useGetView";
import { calculatePoints } from "helpers/ranking";
import { BetType } from "types/types";

type UserRanking = {
  userId: string;
  userName: string;
  totalPoints: number;
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

  // Memoize the ranking calculation
  const ranking = useMemo(() => {
    const userPoints: { [key: string]: UserRanking } = {};

    dataBets.forEach((bet) => {
      const points = calculatePoints(bet);

      if (userPoints[bet.userId]) {
        userPoints[bet.userId].totalPoints += points;
      } else {
        userPoints[bet.userId] = {
          userId: bet.userId,
          userName: bet.userName || "",
          totalPoints: points,
        };
      }
    });

    return Object.values(userPoints).sort(
      (a, b) => b.totalPoints - a.totalPoints
    );
  }, [dataBets]);

  return {
    ranking,
    loading: loadingFromBets,
    error: errorFromBets,
  };
};

export default useRanking;
