import { BetType, DataArrayType, MatchType, UserType } from "types/types";

export const processRecords = (
  databaseName: string,
  records: any
): DataArrayType | undefined => {
  switch (databaseName) {
    case "Matches":
      let matchRecords: MatchType[] = [];

      records.forEach((record: any) => {
        matchRecords?.push({
          id: record.id,
          localTeam: record.get("LocalTeam") + "",
          visitorTeam: record.get("VisitorTeam") + "",
          group: record.get("Group") + "",
          date: record.get("MatchDate") + "",
          localTeamGoals: record.get("LocalGoals") + "",
          visitorTeamGoals: record.get("VisitorGoals") + "",
        });
      });

      return matchRecords;
    case "Users":
      let playerRecords: UserType[] = [];

      records.forEach((record: any) => {
        playerRecords?.push({
          id: record.id,
          pk: record.get("User_ID") + "",
          name: record.get("Name") + "",
        });
      });

      return playerRecords;
    case "Bets":
      let betRecords: BetType[] = [];

      records.forEach((record: any) => {
        betRecords?.push({
          id: record.id,
          userId: record.get("User") + "",
          matchId: record.get("Match") + "",
          localGoals: record.get("LocalGoals") + "",
          visitorGoals: record.get("VisitorGoals") + "",
          userName: record.get("UserName") + "",
        });
      });

      return betRecords;
  }
};

export const getApiBet = ({
  userId,
  matchId,
  localGoals,
  visitorGoals,
}: {
  userId: string;
  matchId: string;
  localGoals: string;
  visitorGoals: string;
}) => {
  return [
    {
      fields: {
        User: [userId],
        Match: [matchId],
        LocalGoals: localGoals,
        VisitorGoals: visitorGoals,
      },
    },
  ];
};
