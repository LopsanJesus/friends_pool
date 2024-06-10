export const maximumGroupPhaseKeyBets = 5;
export const posibleBetScores = ["0", "1", "2", "+"];

export const finalBetsKeys = [
  "semifinalist1",
  "semifinalist2",
  "finalist",
  "winner",
  "topScorer",
  "groupPoolWinner",
];

export const finalBetsPoints = [
  { key: "winner", points: 15 },
  { key: "finalist", points: 10 },
  { key: "semifinalist1", points: 5 },
  { key: "semifinalist2", points: 5 },
  { key: "topScorer", points: 10 },
  { key: "groupPoolWinner", points: 5 },
];

export const navLinks = [
  { nameKey: "topbar.profile", link: "/profile", protected: true },
  { nameKey: "topbar.predictions", link: "/predictions", protected: true },
  { nameKey: "topbar.matches", link: "/matches", protected: false },
  { nameKey: "topbar.players", link: "/players", protected: false },
];
