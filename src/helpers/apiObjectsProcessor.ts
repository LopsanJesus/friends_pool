import {
  BetType,
  DataArrayType,
  FinalBetType,
  MatchType,
  MatchType2,
  UserInfoType,
  UserType,
} from "types/types";

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
          isKeyBet: record.get("IsKeyBet"),
        });
      });

      return betRecords;

    case "UserInfos":
      let userInfoRecords: UserInfoType[] = [];

      records.forEach((record: any) => {
        userInfoRecords?.push({
          id: record.id,
          orientation: record.get("Orientation") + "",
          religion: record.get("Religion") + "",
          randomFact: record.get("RandomFact") + "",
          userId: record.get("User") + "",
        });
      });

      return userInfoRecords;

    case "FinalBets":
      let finalBetsRecords: FinalBetType[] = [];

      records.forEach((record: any) => {
        finalBetsRecords?.push({
          id: record.id,
          betType: record.get("BetType") + "",
          betValue: record.get("BetValue") + "",
          userId: record.get("User") + "",
          userName: record.get("UserName") + "",
        });
      });

      return finalBetsRecords;

    case "Partidos":
      let matchRecords2: MatchType2[] = [];

      records.forEach((record: any) => {
        matchRecords2?.push({
          id: record.id,
          localTeam: record.get("LocalTeam") + "",
          visitorTeam: record.get("VisitorTeam") + "",
          datetime: record.get("Time") + "",
          localScore: record.get("LocalScore") + "",
          visitorScore: record.get("VisitorScore") + "",
          isLive: record.get("IsLive"),
          liveMinute: record.get("LiveMinute") + "",
        });
      });

      return matchRecords2;
  }
};

export const parseApiBet = ({
  userId,
  matchId,
  localGoals,
  visitorGoals,
  isKeyBet,
}: BetType) => {
  return [
    {
      fields: {
        User: [userId],
        Match: [matchId],
        LocalGoals: localGoals,
        VisitorGoals: visitorGoals,
        IsKeyBet: isKeyBet,
      },
    },
  ];
};

export const parseApiFinalBet = ({
  userId,
  betType,
  betValue,
}: {
  userId: string;
  betType: string;
  betValue: string;
}) => {
  return [
    {
      fields: {
        User: [userId],
        BetType: betType,
        BetValue: betValue,
      },
    },
  ];
};
