import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "@store/countries/countrySlice";
import countryDetailsReducer from "@store/countries/countryDetailsSlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
    countryDetails: countryDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
