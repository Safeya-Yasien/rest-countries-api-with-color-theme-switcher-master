import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@services/axios-global";
import { formattedCountries } from "@/utils";

const actGetAllCountries = createAsyncThunk(
  "actGetAllCountries",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("/all");
      return formattedCountries(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetAllCountries;
