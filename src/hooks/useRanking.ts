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
  finalBetPoints: number;
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
          finalBetPoints: 0,
        };
      }
    });

    let updates = [
      { userName: "Pablo", points: 20 },
      { userName: "Juandi", points: 10 },
      { userName: "Venegas", points: 15 },
      { userName: "Jesús", points: 20 },
      { userName: "Luis", points: 15 },
      { userName: "Gonza", points: 5 },
    ];

    let newData = addPoints(userPoints, updates);

    return Object.values(newData).sort((a, b) => {
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

function addPoints(
  data: any,
  updates: { userName: string; points: number }[]
): UserRanking[] {
  // Create a copy of the data object
  let newData = { ...data };

  // Loop through each update
  updates.forEach((update) => {
    // Find the user by userName
    for (let key in newData) {
      if (newData[key].userName === update.userName) {
        // Create a copy of the user object and add the points
        newData[key] = {
          ...newData[key],
          totalPoints: newData[key].totalPoints + update.points,
          finalBetPoints: update.points,
        };
        break;
      }
    }
  });

  return newData;
}
