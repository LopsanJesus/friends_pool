import { useCallback, useState } from "react";

import useAirtable from "./useAirtable";

interface IProps {
  databaseName: string;
}

const useInsert = ({ databaseName }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [inserted, setInserted] = useState(false);

  const { database } = useAirtable();

  const insert = useCallback((records: any) => {
    setLoading(true);

    database(databaseName).create(records, function (err: any, records: any) {
      if (err) {
        console.error(err);
        setError(err);
        setLoading(false);
        return;
      }

      setLoading(false);
      setInserted(true);
    });

    // eslint-disable-next-line
  }, []);

  return { insert, error, inserted, loading };
};

export default useInsert;
