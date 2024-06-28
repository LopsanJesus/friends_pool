const flags = {
  showMatchCardBets: !isWithinRange(),
  showParticipantFinalBets: true,
  betsWindowOpen: isWithinRange(),
  autoScrapping: process.env.REACT_APP_AUTO_SCRAPPING === "true",
};

export default flags;

function isWithinRange() {
  // Obtén la fecha y hora actual
  const now = new Date();

  // Fecha y hora de inicio: 27 de junio a las 14:00
  const startDate = new Date(now.getFullYear(), 5, 27, 12, 0, 0); // Junio es el mes 5 (0-indexed)

  // Fecha y hora de fin: 29 de junio a la 13:00
  const endDate = new Date(now.getFullYear(), 5, 28, 13, 0, 0);

  // Comprueba si la fecha y hora actual está dentro del rango
  return now >= startDate && now <= endDate;
}
