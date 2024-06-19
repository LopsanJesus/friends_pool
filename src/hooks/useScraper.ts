import axios from "axios";
import { localScrapping } from "config/constants";
import { useEffect, useState } from "react";

const useScraper = (url: string, interval: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedData, setFetchedData] = useState<boolean>(false);

  useEffect(() => {
    if (localScrapping) {
      const fetchData = async () => {
        setLoading(true);
        setFetchedData(false);

        try {
          const response = await axios.get(url);
          console.log("Fetched data:", response.data);
          setFetchedData(true);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setError(error.message);
          } else {
            setError("An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
      };

      // Initial fetch when component mounts
      fetchData();

      // Interval to fetch data periodically
      const intervalId = setInterval(fetchData, interval);

      // Clean up interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [url, interval]);

  return { fetchedData, loading, error };
};

export default useScraper;
