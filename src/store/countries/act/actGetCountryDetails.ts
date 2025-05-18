import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@services/axios-global";
import type { ICurrency } from "@/types";

const actGetCountryDetails = createAsyncThunk(
  "actGetCountryDetails",
  async (code: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`/alpha/${code}`);
      const data = response.data[0];

      const formattedCountry = {
        name: data.name.common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital?.[0] || "N/A",
        topLevelDomain: data.tld?.[0] || "N/A",
        currencies: (Object.values(data.currencies || {}) as ICurrency[])
          .map((c) => c.name)
          .join(", "),
        languages: Object.values(data.languages || {}) as string[],
        borders: data.borders || [],
        cca3: data.cca3,
        flag: data.flags?.png || "",
      };

      return formattedCountry;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetCountryDetails;
