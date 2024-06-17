import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";

import { BetType, MatchType } from "types/types";

import Loader from "components/Loader";
import MatchCard from "components/MatchCard";
import PageWithTopbar from "components/PageWithTopbar";
import useOrderMatches from "hooks/useOrderMatches";

import "./style.scss";

const Matches = () => {
  const [matchesData, setMatchesData] = useState<MatchType[]>([]);
  const [betsData, setBetsData] = useState<BetType[]>([]);

  const { t } = useTranslation();
  const { orderMatches } = useOrderMatches();

  const {
    data: dataMatches,
    loading: loadingMatches,
    error: errorMatches,
  } = useGetView({
    databaseName: "Matches",
  });

  const {
    data: dataBets,
    loading: loadingBets,
    error: errorBets,
  } = useGetView({
    databaseName: "Bets",
    view: "BetsWithUser",
  });

  useEffect(() => {
    if (dataMatches && dataBets) {
      setBetsData(dataBets as BetType[]);
      setMatchesData(orderMatches(dataMatches as MatchType[]));
    }
  }, [dataBets, dataMatches, orderMatches]);

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
            ></MatchCard>
          );
        })}
    </PageWithTopbar>
  );
};

export default Matches;
