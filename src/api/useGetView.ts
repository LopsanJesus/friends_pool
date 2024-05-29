import { useEffect, useState } from "react";

import useAirtable from "api/useAirtable";
import { processRecords } from "helpers/apiObjectsProcessor";

import { DataArrayType } from "types/types";

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

    database(databaseName)
      .select({
        maxRecords: 100,
        view,
        pageSize: 100,
        filterByFormula: filterByFormula ?? "",
        fields: fields ?? [],
      })
      .firstPage(function (err, records) {
        if (err) {
          setLoading(false);
          setError("Error fetching " + databaseName);
          return;
        }

        setLoading(false);
        setData(processRecords(databaseName, records));
      });
    // eslint-disable-next-line
  }, []);

  return { data, loading, error };
};

export default useGetView;
