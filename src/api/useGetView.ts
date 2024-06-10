import { useEffect, useState } from "react";

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

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
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
    };

    fetchData();

    // eslint-disable-next-line
  }, [databaseName, view, filterByFormula, fields]);

  return { data, loading, error };
};

export default useGetView;
