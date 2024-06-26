import { BetType } from "types/types";

const convertScore = (score: string): number => {
  return score === "+" ? 3 : parseInt(score, 10);
};

const convertFinalScore = (score: string): number => {
  return parseInt(score, 10) >= 3 ? 3 : parseInt(score, 10);
};

export const calculatePoints = (bet: BetType) => {
  let points = 0;
  let exactMatches = 0;
  let keyPoints = 0;

  if (
    bet.finalLocalScore !== undefined &&
    bet.finalVisitorScore !== undefined
  ) {
    const localScore = convertScore(bet.localScore);
    const visitorScore = convertScore(bet.visitorScore);
    const finalLocalScore = convertFinalScore(bet.finalLocalScore);
    const finalVisitorScore = convertFinalScore(bet.finalVisitorScore);

    if (localScore === finalLocalScore && visitorScore === finalVisitorScore) {
      points = 3; // Exact match
      exactMatches = 1;
    } else if (
      (localScore > visitorScore && finalLocalScore > finalVisitorScore) ||
      (localScore < visitorScore && finalLocalScore < finalVisitorScore) ||
      (localScore === visitorScore && finalLocalScore === finalVisitorScore)
    ) {
      points = 1; // Correct sign
    }

    if (bet.clasified !== "undefined" && bet.clasified === bet.finalClasified) {
      points += 1;
    }

    if (bet.isKeyBet) {
      keyPoints = points;
      points *= 2; // Double points for key bet
    }
  }

  return { exactMatches, points, keyPoints };
};
