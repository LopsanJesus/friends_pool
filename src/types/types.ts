export type MatchType = {
  id: string;
  localTeam: string;
  visitorTeam: string;
};

export type UserType = {
  id: string;
  pk: string;
  name: string;
};

export type BetType = {
  id?: string;
  userId: string;
  matchId: string;
  localGoals: string;
  visitorGoals: string;
};

export type DataArrayType = MatchType[] | BetType[] | UserType[] | null;
