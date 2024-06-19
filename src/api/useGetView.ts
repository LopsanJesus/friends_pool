import { useCallback, useEffect, useState } from "react";

import { processRecords } from "helpers/apiObjectsProcessor";
import { DataArrayType } from "types/types";

import useAirtable from "./useAirtable";

interface IProps {
  databaseName: string;
  view?: string;
  filterByFormula?: string;
  fields?: string[];
}

const useGetView = ({
  databaseName,
  view = "Grid view",
  filterByFormula,
  fields,
}: IProps) => {
  const { database } = useAirtable();

  const [data, setData] = useState<DataArrayType | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: any = await database(databaseName)
        .select({
          view,
          pageSize: 100,
          filterByFormula: filterByFormula ?? "",
          fields: fields ?? [],
        })
        .all();

      setData(processRecords(databaseName, response));
    } catch (err) {
      setError("Error fetching " + databaseName);
      console.error(err);
    } finally {
      setLoading(false);
    }

    // eslint-disable-next-line
  }, [databaseName, view, filterByFormula, fields]);

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, [shouldRefetch]);

  const forceRefetch = useCallback(
    () => setShouldRefetch(!shouldRefetch),
    [shouldRefetch]
  );

  return { data, loading, error, forceRefetch };
};

export default useGetView;
