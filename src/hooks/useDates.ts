import { useMemo } from "react";

const useDates = () => {
  const isToday = useMemo(
    () => (datetime: string) => {
      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");

      return `${day}.${month}.` === datetime.split(" ")[0];
    },
    []
  );

  const removeDay = (datetime: string) => {
    const parts = datetime.split(" ");
    return parts[1];
  };

  return {
    isToday,
    removeDay,
  };
};

export default useDates;
