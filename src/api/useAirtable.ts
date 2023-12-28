import Airtable from "airtable";

import { BASE_URL, BASE_ID, API_KEY } from "./constants";

const useAirtable = () => {
  Airtable.configure({
    endpointUrl: BASE_URL,
    apiKey: API_KEY,
  });

  const database = Airtable.base(BASE_ID);

  return {
    database,
  };
};

export default useAirtable;
