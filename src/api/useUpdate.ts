import { useCallback } from "react";
import useAirtable from "./useAirtable";

const useUpdate = () => {
  const { database } = useAirtable();

  const update = useCallback(
    (id: string, on: boolean) => {
      database("Basketballs").update([
        {
          id: id,
          fields: {
            On: on,
          },
        },
      ]);
    },
    [database]
  );

  return { update };
};

export default useUpdate;
