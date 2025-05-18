import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@services/axios-global";
import { formattedCountries } from "@/utils";

const actGetCountryByRegion = createAsyncThunk(
  "actGetCountryByRegion",
  async (region: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`/region/${region}`);

      return formattedCountries(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetCountryByRegion;
