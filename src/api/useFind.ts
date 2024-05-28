import { useCallback } from "react";
import useAirtable from "./useAirtable";

interface IProps {
  databaseName: string;
}

const useFind = ({ databaseName }: IProps) => {
  const { database } = useAirtable();

  const find = useCallback(
    (playerId: string) => {
      database(databaseName).find(playerId, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Retrieved", record?.id);

        return record;
      });
    },
    [database, databaseName]
  );

  return { find };
};

export default useFind;
