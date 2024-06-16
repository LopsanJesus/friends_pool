export type MatchType = {
  id?: string;
  localTeam: string;
  visitorTeam: string;
  datetime: string;
  localScore: string;
  visitorScore: string;
  isLive: boolean;
  liveMinute: string;
  group: string;
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
  localScore: string;
  visitorScore: string;
  userName?: string;
  isKeyBet?: boolean;
  localTeam?: string;
  visitorTeam?: string;
  points?: number;
  finalLocalScore?: string;
  finalVisitorScore?: string;
};

export type UserInfoType = {
  id: string;
  bet: string;
  orientation: string;
  religion: string;
  moneyInBank: string;
  favoriteAfricaPlayer: string;
  userId: string;
};

export type FinalBetType = {
  id?: string;
  betType: string;
  betValue: string;
  userId: string;
  userName?: string;
};

export type DataArrayType =
  | MatchType[]
  | BetType[]
  | UserType[]
  | UserInfoType[]
  | FinalBetType[]
  | null;
