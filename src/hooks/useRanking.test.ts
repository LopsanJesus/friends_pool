import { renderHook } from "@testing-library/react";
import useGetView from "api/useGetView";

import useRanking from "./useRanking";

jest.mock("api/useGetView");

const mockBets = [
  {
    userId: "user1",
    matchId: "match1",
    localScore: "1",
    visitorScore: "2",
    finalLocalScore: "1",
    finalVisitorScore: "2",
    isKeyBet: false,
  },
  {
    userId: "user1",
    matchId: "match2",
    localScore: "+",
    visitorScore: "1",
    finalLocalScore: "4",
    finalVisitorScore: "1",
    isKeyBet: true,
  },
  {
    userId: "user2",
    matchId: "match1",
    localScore: "0",
    visitorScore: "+",
    finalLocalScore: "0",
    finalVisitorScore: "3",
    isKeyBet: false,
  },
  {
    userId: "user2",
    matchId: "match3",
    localScore: "2",
    visitorScore: "1",
    finalLocalScore: "2",
    finalVisitorScore: "2",
    isKeyBet: true,
  },
];

describe("useRanking", () => {
  beforeEach(() => {
    (useGetView as jest.Mock).mockReturnValue({
      data: mockBets,
      loading: false,
      error: null,
    });
  });

  it("should calculate and return the correct ranking", () => {
    const { result } = renderHook(() => useRanking());

    const expectedRanking = [
      {
        userId: "user1",
        userName: "",
        totalPoints: 9, // 3 points for exact match + 6 points (3*2) for key bet
      },
      {
        userId: "user2",
        userName: "",
        totalPoints: 3, // 3 points for exact match + 0 points (2*0) for correct sign in key bet
      },
    ];

    expect(result.current.ranking).toEqual(expectedRanking);
  });
});
