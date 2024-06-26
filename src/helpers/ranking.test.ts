import { BetType } from "types/types";
import { calculatePoints } from "./ranking";

describe("calculatePoints", () => {
  it("should return 6 points for exact match with key bet", () => {
    const bet: BetType = {
      userId: "user1",
      matchId: "match1",
      localScore: "+",
      visitorScore: "1",
      finalLocalScore: "3",
      finalVisitorScore: "1",
      isKeyBet: true,
      clasified: "1",
      finalClasified: "1",
    };
    expect(calculatePoints(bet).points).toBe(8); // Double points for key bet
  });

  it("should return 1 point for correct sign without key bet", () => {
    const bet: BetType = {
      userId: "user2",
      matchId: "match2",
      localScore: "2",
      visitorScore: "0",
      finalLocalScore: "1",
      finalVisitorScore: "0",
      isKeyBet: false,
    };
    expect(calculatePoints(bet).points).toBe(1);
  });

  it("should return 2 points for incorrect prediction with correct sign and key bet", () => {
    const bet: BetType = {
      userId: "user3",
      matchId: "match3",
      localScore: "1",
      visitorScore: "2",
      finalLocalScore: "0",
      finalVisitorScore: "3",
      isKeyBet: true,
    };
    expect(calculatePoints(bet).points).toBe(2); // Correct sign and key bet
  });

  it("should return 0 points if final scores are undefined", () => {
    const bet: BetType = {
      userId: "user4",
      matchId: "match4",
      localScore: "+",
      visitorScore: "1",
      finalLocalScore: undefined,
      finalVisitorScore: undefined,
      isKeyBet: false,
    };
    expect(calculatePoints(bet).points).toBe(0);
  });

  it("should return 0 points for incorrect prediction with key bet", () => {
    const bet: BetType = {
      userId: "user4",
      matchId: "match4",
      localScore: "1",
      visitorScore: "2",
      finalLocalScore: "3",
      finalVisitorScore: "3",
      isKeyBet: true,
    };
    expect(calculatePoints(bet).points).toBe(0);
  });

  it("should return 6 points for exact match with both scores +", () => {
    const bet: BetType = {
      userId: "user5",
      matchId: "match5",
      localScore: "+",
      visitorScore: "+",
      finalLocalScore: "4",
      finalVisitorScore: "5",
      isKeyBet: true,
    };
    expect(calculatePoints(bet).points).toBe(6); // Double points for key bet
  });

  it("should return 6 points for same scores exact match with key bet", () => {
    const bet: BetType = {
      userId: "user6",
      matchId: "match6",
      localScore: "1",
      visitorScore: "1",
      finalLocalScore: "1",
      finalVisitorScore: "1",
      isKeyBet: true,
    };
    expect(calculatePoints(bet).points).toBe(6); // Double points for key bet, exact match
  });

  it("should return 1 point for correct sign but incorrect clasified", () => {
    const bet: BetType = {
      userId: "user7",
      matchId: "match7",
      localScore: "1",
      visitorScore: "1",
      finalLocalScore: "0",
      finalVisitorScore: "0",
      isKeyBet: false,
      clasified: "2",
      finalClasified: "1",
    };
    expect(calculatePoints(bet).points).toBe(1);
  });
});
