import { useContext } from "react";

import { BetsContext, BetsContextType } from "contexts/BetsContext";

const useBets = (): BetsContextType => {
  const context = useContext(BetsContext);

  if (!context) {
    throw new Error("useBets must be used within a BetsProvider");
  }
  return context;
};

export default useBets;
