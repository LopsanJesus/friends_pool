import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";

import { scraperInterval, scraperURL } from "config/constants";
import useBets from "hooks/useBets";
import useOrderMatches from "hooks/useOrderMatches";
import useScraper from "hooks/useScraper";
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
    fetchedData,
    loading: loadingScraper,
    error: errorScraper,
  } = useScraper(scraperURL, scraperInterval);

  const {
    data: dataMatches,
    loading: loadingMatches,
    error: errorMatches,
    forceRefetch,
  } = useGetView({
    databaseName: "Matches",
  });

  useEffect(() => {
    if (loadingScraper) {
      console.log("Loading scraper");
    }
  }, [loadingScraper]);

  useEffect(() => {
    if (errorScraper) {
      console.log("Scraper error");
    }
  }, [errorScraper]);

  useEffect(() => {
    if (fetchedData) {
      forceRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  useEffect(() => {
    if (bets) {
      setBetsData(bets);
    }
  }, [bets]);

  useEffect(() => {
    if (dataMatches) {
      setMatchesData(orderMatches(dataMatches as MatchType[]));
    }
  }, [dataMatches, orderMatches]);

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
