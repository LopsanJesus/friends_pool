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

    function addPoints(
      data: any,
      updates: { userName: string; points: number }[]
    ) {
      // Loop through each update
      updates.forEach((update) => {
        // Find the user by userName
        for (let key in data) {
          if (data[key].userName === update.userName) {
            // Add the points
            data[key].totalPoints += update.points;
            break;
          }
        }
      });
    }

    let updates = [
      { userName: "Jesús", points: 15 },
      { userName: "Juandi", points: 15 },
      { userName: "Pablo", points: 15 },
      { userName: "Gonza", points: 10 },
      { userName: "Luis", points: 10 },
      { userName: "Venegas", points: 15 },
    ];

    addPoints(userPoints, updates);

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
