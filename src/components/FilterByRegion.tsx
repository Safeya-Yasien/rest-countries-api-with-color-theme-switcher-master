import { type ChangeEvent } from "react";

import { useAppDispatch } from "@store/app/hooks";
import actGetCountryByRegion from "@store/countries/act/actGetCountryByRegion";

const FilterByRegion = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const dispatch = useAppDispatch();

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value;

    dispatch(actGetCountryByRegion(selectedRegion));
  };

  return (
    <div className="w-52">
      <select
        className="w-full bg-white dark:bg-blue-900 text-grey-950 dark:text-white rounded-md p-4 shadow-sm outline-none"
        onChange={handleFilter}
      >
        <option value="">Filter by Region</option>
        {regions.map((r) => (
          <option
            key={r}
            value={r}
            className="text-grey-950 dark:text-white bg-white dark:bg-blue-900"
          >
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByRegion;
