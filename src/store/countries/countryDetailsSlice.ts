import { createSlice } from "@reduxjs/toolkit";

import type { ICountryDetails, TLoading } from "@/types";
import actGetCountryDetails from "./act/actGetCountryDetails";

type TCountryDetailsState = {
  country: ICountryDetails | null;
  error: string | null;
  loading: TLoading;
};

const initialState: TCountryDetailsState = {
  country: null,
  error: null,
  loading: "idle",
};

export const countryDetailsSlice = createSlice({
  name: "countryDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCountryDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCountryDetails.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.country = action.payload;
    });
    builder.addCase(actGetCountryDetails.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message as string;
    });
  },
});

export default countryDetailsSlice.reducer;
