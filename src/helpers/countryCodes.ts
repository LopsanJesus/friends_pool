import countriesData from "data/country_codes.json";

interface Countries {
  [key: string]: string;
}

export const getCountryCode = (countryName: string) => {
  const countries: Countries = countriesData;

  for (const code in countries) {
    if (countries.hasOwnProperty(code)) {
      if (countries[code] === countryName) {
        return code;
      }
    }
  }

  return undefined;
};
