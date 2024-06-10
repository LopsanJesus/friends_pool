import countriesData from "data/country_codes.json";

interface Countries {
  [key: string]: string;
}

export const getCountryCode = (countryName: string) => {
  const countries: Countries = countriesData;

  for (const code in countries) {
    if (countries.hasOwnProperty(code)) {
      if (countries[code] === getCountryNameInEnglish(countryName)) {
        return code;
      }
    }
  }

  return undefined;
};

const countryNames: Countries = {
  Albania: "Albania",
  Alemania: "Germany",
  Andorra: "Andorra",
  Armenia: "Armenia",
  Austria: "Austria",
  Azerbaiyán: "Azerbaijan",
  Bélgica: "Belgium",
  Bielorrusia: "Belarus",
  "Bosnia y Herzegovina": "Bosnia and Herzegovina",
  Bulgaria: "Bulgaria",
  Chipre: "Cyprus",
  "Ciudad del Vaticano": "Vatican City",
  Croacia: "Croatia",
  Dinamarca: "Denmark",
  Eslovaquia: "Slovakia",
  Eslovenia: "Slovenia",
  España: "Spain",
  Estonia: "Estonia",
  Finlandia: "Finland",
  Francia: "France",
  Georgia: "Georgia",
  Grecia: "Greece",
  Hungría: "Hungary",
  Irlanda: "Ireland",
  Islandia: "Iceland",
  Italia: "Italy",
  Kazajistán: "Kazakhstan",
  Letonia: "Latvia",
  Liechtenstein: "Liechtenstein",
  Lituania: "Lithuania",
  Luxemburgo: "Luxembourg",
  Malta: "Malta",
  Moldavia: "Moldova",
  Mónaco: "Monaco",
  Montenegro: "Montenegro",
  Noruega: "Norway",
  "Países Bajos": "Netherlands",
  Polonia: "Poland",
  Portugal: "Portugal",
  "Reino Unido": "United Kingdom",
  "República Checa": "Czechia",
  "Macedonia del Norte": "North Macedonia",
  Rumanía: "Romania",
  Rusia: "Russia",
  "San Marino": "San Marino",
  Serbia: "Serbia",
  Suecia: "Sweden",
  Suiza: "Switzerland",
  Turquía: "Turkey",
  Ucrania: "Ukraine",
  Escocia: "Scotland",
  Inglaterra: "England",
};

function getCountryNameInEnglish(spanishName: string) {
  const englishName = countryNames[spanishName];
  if (englishName) {
    return englishName;
  } else {
    return "Country not found"; // Mensaje por defecto si el país no está en el objeto
  }
}
