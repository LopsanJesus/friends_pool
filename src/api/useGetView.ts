import { useEffect, useState } from "react";

import { DataArrayType } from "../types/types";

import useAirtable from "./useAirtable";
import { castRecords } from "./casters";

interface IProps {
  databaseName: string;
  view: string;
}

const useGetView = ({ databaseName, view }: IProps) => {
  const { database } = useAirtable();

  const [data, setData] = useState<DataArrayType | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    database(databaseName)
      .select({
        maxRecords: 100,
        view,
        pageSize: 100,
      })
      .firstPage(function (err, records) {
        if (err) {
          setLoading(false);
          setError("Error fetching " + databaseName);
          return;
        }

        setLoading(false);
        setData(castRecords(databaseName, records));
      });
    // eslint-disable-next-line
  }, []);

  return { data, loading, error };
};

export default useGetView;
