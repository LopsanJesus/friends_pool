import { BetType, DataArrayType, MatchType, PlayerType } from "../types/types";

export const castRecords = (
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
        });
      });

      return matchRecords;
    case "Players":
      let playerRecords: PlayerType[] = [];

      records.forEach((record: any) => {
        playerRecords?.push({
          id: record.id,
          name: record.get("Name") + "",
        });
      });

      return playerRecords;
    case "Bets":
      let betRecords: BetType[] = [];

      records.forEach((record: any) => {
        betRecords?.push({
          id: record.id,
          player: record.get("Player_FK") + "",
          match: record.get("Match_FK") + "",
          betType: record.get("BetType") + "",
          betValue: record.get("BetValue") + "",
        });
      });

      return betRecords;
  }
};
