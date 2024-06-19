import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";

import useBets from "hooks/useBets";
import useOrderMatches from "hooks/useOrderMatches";
import { BetType, MatchType } from "types/types";

import Loader from "components/Loader";
import MatchCard from "components/MatchCard";
import PageWithTopbar from "components/PageWithTopbar";

import "./style.scss";

const Matches = () => {
  const [matchesData, setMatchesData] = useState<MatchType[]>([]);
  const [betsData, setBetsData] = useState<BetType[]>([]);

  const { t } = useTranslation();
  const { orderMatches } = useOrderMatches();
  const { bets, loading: loadingBets, error: errorBets } = useBets();

  const {
    data: dataMatches,
    loading: loadingMatches,
    error: errorMatches,
  } = useGetView({
    databaseName: "Matches",
  });

  useEffect(() => {
    if (dataMatches && bets) {
      setBetsData(bets);
      setMatchesData(orderMatches(dataMatches as MatchType[]));
    }
  }, [dataMatches, bets, orderMatches]);

  if (errorMatches || errorBets) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar className="Matches" title={t("matches.title")}>
      {(loadingMatches || loadingBets) && <Loader />}
      {!loadingMatches &&
        !loadingBets &&
        matchesData &&
        betsData &&
        matchesData.map((match: MatchType, index) => {
          const betsForMatch = betsData.filter((bet: BetType) => {
            return bet.matchId === match.id;
          });

          return (
            <MatchCard
              key={match.id}
              match={match}
              bets={betsForMatch}
              openAtFirst={index === 0}
            />
          );
        })}
    </PageWithTopbar>
  );
};

export default Matches;
