import { useState, useEffect } from "react";

import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0";
const API_KEY =
  "patvm2VOCY6c5yZKr.593b24d7886335f708a31ed23086bbceb50ce7aab3b699fed5b0a4f710d45bbb";
const BASE_ID = "appAReXxuqHtRQHSr";
const TABLE_NAME = "Matches";

const endpoint = `${BASE_URL}/${BASE_ID}/${TABLE_NAME}`;

const useMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        });

        setMatches(response.data.records);
        setLoading(false);

        return response.data.records;
      } catch (error) {
        setError("Error fetching matches");
        setLoading(false);

        throw error;
      }
    };

    fetchMatches();
  }, []);

  return { matches, loading, error };
};

export default useMatches;
