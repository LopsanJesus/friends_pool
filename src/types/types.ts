export type MatchType = {
  id: string;
  localTeam: string;
  visitorTeam: string;
};

export type PlayerType = {
  id: string;
  name?: string;
};

export type BetType = {
  id: string;
  player: string;
  match: string;
  betType: string;
  betValue: string;
};

export type DataArrayType = MatchType[] | BetType[] | PlayerType[] | null;
