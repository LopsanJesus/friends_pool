import { BetType } from "types/types";

// Helper function to convert score from string to number
const convertScore = (score: string): number => {
  return score === "+" ? 3 : parseInt(score, 10);
};

const convertFinalScore = (score: string): number => {
  return parseInt(score, 10) >= 3 ? 3 : parseInt(score, 10);
};

export const calculatePoints = (bet: BetType) => {
  if (
    bet.finalLocalScore !== undefined &&
    bet.finalVisitorScore !== undefined
  ) {
    const localScore = convertScore(bet.localScore);
    const visitorScore = convertScore(bet.visitorScore);
    const finalLocalScore = convertFinalScore(bet.finalLocalScore);
    const finalVisitorScore = convertFinalScore(bet.finalVisitorScore);

    let points = 0;

    if (localScore === finalLocalScore && visitorScore === finalVisitorScore) {
      points = 3; // Exact match
    } else if (
      (localScore > visitorScore && finalLocalScore > finalVisitorScore) ||
      (localScore < visitorScore && finalLocalScore < finalVisitorScore) ||
      (localScore === visitorScore && finalLocalScore === finalVisitorScore)
    ) {
      points = 1; // Correct sign
    }

    if (bet.isKeyBet) {
      points *= 2; // Double points for key bet
    }

    return points;
  }
  return 0; // No points
};
