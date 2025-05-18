import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/app/hooks";
import actGetAllCountries from "@store/countries/act/actGetAllCountries";

import { Country, FilterByRegion, SearchByCountryName } from "@/components";

import type { TCountry } from "@/types";

const Home = () => {
  const dispatch = useAppDispatch();
  const { countries, loading, error } = useAppSelector(
    (state) => state.country
  );

  useEffect(() => {
    dispatch(actGetAllCountries());
  }, [dispatch]);

  const displayedCountries = useMemo(() => countries.slice(0, 8), [countries]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-0">
        {/* search + filter*/}
        <SearchByCountryName />
        <FilterByRegion />
      </div>
      <section className="mt-10 px-10 md:px-0">
        {loading === "pending" && (
          <div className="text-center text-gray-600 animate-pulse">
            Loading countries...
          </div>
        )}
        {loading === "failed" && (
          <div
            className="text-red-500 text-center"
            role="alert"
            aria-label="Error message"
          >
            {error || "Failed to load countries. Please try again later."}
            <button
              className="ml-2 text-blue-500 underline cursor-pointer"
              onClick={() => dispatch(actGetAllCountries())}
              aria-label="Retry loading countries"
            >
              Retry
            </button>
          </div>
        )}
        {loading === "succeeded" && displayedCountries.length > 0 && (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            role="list"
            aria-label="Country list"
          >
            {displayedCountries.map((country: TCountry) => (
              <li key={country.cca3}>
                <Country country={country} />
              </li>
            ))}
          </ul>
        )}
        {loading === "succeeded" && displayedCountries.length === 0 && (
          <div className="text-center text-gray-600" aria-label="No results">
            No countries found. Try adjusting your search or filter.
          </div>
        )}
      </section>
    </>
  );
};
export default Home;
