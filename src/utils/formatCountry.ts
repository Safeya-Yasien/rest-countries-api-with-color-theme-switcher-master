import type { TCountry, TRawCountry } from "@/types";

const formattedCountries = (data: TRawCountry[]): TCountry[] => {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map((country) => ({
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital,
    cca3: country.cca3,
    flag: country.flags?.png || "",
  }));
};

export default formattedCountries;
