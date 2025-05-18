import { createSlice } from "@reduxjs/toolkit";

import type { TCountry, TLoading } from "@/types";

import actGetCountryByName from "./act/actGetCountryByName";
import actGetCountryByRegion from "./act/actGetCountryByRegion";
import actGetAllCountries from "./act/actGetAllCountries";

type TCountryState = {
  countries: TCountry[];
  error: string | null;
  loading: TLoading;
};

const initialState: TCountryState = {
  countries: [],
  error: null,
  loading: "idle",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetAllCountries.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAllCountries.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.countries = action.payload;
    });
    builder.addCase(actGetAllCountries.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message as string;
    });

    // actGetCountryByName
    builder.addCase(actGetCountryByName.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCountryByName.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.countries = action.payload;
    });
    builder.addCase(actGetCountryByName.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message as string;
    });

    // actGetCountryByRegion
    builder.addCase(actGetCountryByRegion.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCountryByRegion.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.countries = action.payload;
    });
    builder.addCase(actGetCountryByRegion.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message as string;
    });
  },
});

export default countrySlice.reducer;
