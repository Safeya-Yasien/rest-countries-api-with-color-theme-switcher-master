import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@services/axios-global";
import { formattedCountries } from "@/utils";

const actGetCountryByName = createAsyncThunk(
  "actGetCountryByName",
  async (countryName: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`/name/${countryName}`);
      return formattedCountries(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetCountryByName;
