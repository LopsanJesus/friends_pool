import { useCallback, useState } from "react";
import useAirtable from "./useAirtable";

interface IProps {
  databaseName: string;
  records: any;
}

const useInsert = ({ databaseName, records }: IProps) => {
  const [error, setError] = useState<any>(null);

  const { database } = useAirtable();

  const insert = useCallback(() => {
    database(databaseName).create(records, function (err: any) {
      if (err) {
        console.error(err);
        setError(err);
        return;
      }
    });
    // eslint-disable-next-line
  }, []);

  return { insert, error };
};

export default useInsert;
