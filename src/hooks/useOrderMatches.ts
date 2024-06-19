import { useCallback, useMemo } from "react";
import { MatchType } from "types/types";

const useOrderMatches = () => {
  const today = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours to 0 for accurate comparison

    return today;
  }, []);

  const parseCustomDateTime = useMemo(
    () => (datetimeStr: string) => {
      const parts = datetimeStr.split(". ");
      const day = parts[0].split(".")[0];
      const month = parts[0].split(".")[1];
      const time = parts[1];

      const year = new Date().getFullYear();

      const formattedDateStr = `${year}-${month}-${day}T${time}:00`;

      return new Date(formattedDateStr);
    },
    []
  );

  const orderMatches = useCallback(
    (matches: MatchType[]) => {
      const futureMatches: MatchType[] = [];
      const pastMatches: MatchType[] = [];
      const liveMatches: MatchType[] = [];

      matches.forEach((match) => {
        const matchDate = new Date(parseCustomDateTime(match.datetime));

        if (match.isLive || match.liveMinute === "Descanso") {
          liveMatches.push(match);
        } else if (matchDate > today) {
          futureMatches.push(match);
        } else {
          pastMatches.push(match);
        }
      });

      return [...liveMatches, ...futureMatches, ...pastMatches];
    },
    [parseCustomDateTime, today]
  );

  return {
    orderMatches,
  };
};

export default useOrderMatches;
