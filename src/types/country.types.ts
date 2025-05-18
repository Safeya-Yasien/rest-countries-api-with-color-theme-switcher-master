export type TCountry = {
  name: string;
  population: number;
  region: string;
  capital: string;
  cca3: string;
  flag: string;
};

export type TRawCountry = {
  name: { common: string };
  population: number;
  region: string;
  capital: string;
  cca3: string;
  flags: { png: string };
};
