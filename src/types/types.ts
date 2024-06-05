export type MatchType = {
  id?: string;
  localTeam: string;
  visitorTeam: string;
  group: string;
  date: string;
  localTeamGoals: string;
  visitorTeamGoals: string;
};

export type MatchType2 = {
  id?: string;
  localTeam: string;
  visitorTeam: string;
  datetime: string;
  localScore: string;
  visitorScore: string;
  isLive: boolean;
  liveMinute: string;
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
  userName?: string;
};

export type UserInfoType = {
  id: string;
  orientation: string;
  religion: string;
  randomFact: string;
  userId: string;
};

export type DataArrayType =
  | MatchType[]
  | MatchType2[]
  | BetType[]
  | UserType[]
  | UserInfoType[]
  | null;
