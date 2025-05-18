export interface ICountryDetails {
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string[];
  borders: string[];
  cca3: string;
  flag: string;
}

export interface ICurrency {
  name: string;
  symbol?: string;
}
