import useGetView from "api/useGetView";
import { ReactNode, createContext, useEffect, useState } from "react";

import { BetType } from "types/types";

export interface BetsContextType {
  bets: BetType[];
  loading: boolean;
  error: any;
}

export const BetsContext = createContext<BetsContextType | undefined>(
  undefined
);

const BetsProvider = ({ children }: { children: ReactNode }) => {
  const [bets, setBets] = useState<BetType[]>([]);

  const { data, loading, error } = useGetView({
    databaseName: "Bets",
  });

  useEffect(() => {
    if (data) {
      setBets(data as BetType[]);
    }
  }, [data]);

  return (
    <BetsContext.Provider value={{ bets, loading, error }}>
      {children}
    </BetsContext.Provider>
  );
};

export default BetsProvider;
