const constants = {
  maximumGroupPhaseKeyBets: 2,
  posibleBetScores: ["0", "1", "2", "+"],
  finalBetsKeys: [
    "semifinalist1",
    "semifinalist2",
    "finalist",
    "winner",
    "topScorer",
    "groupPoolWinner",
  ],
  finalBetsPoints: [
    { key: "winner", points: 15 },
    { key: "finalist", points: 10 },
    { key: "semifinalist1", points: 5 },
    { key: "semifinalist2", points: 5 },
    { key: "topScorer", points: 10 },
    { key: "groupPoolWinner", points: 5 },
  ],
};

export default constants;
