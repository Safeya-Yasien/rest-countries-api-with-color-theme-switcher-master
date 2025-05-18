import { useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "@store/app/hooks";
import actGetAllCountries from "@store/countries/act/actGetAllCountries";
import actGetCountryByName from "@store/countries/act/actGetCountryByName";

const SearchByCountryName = () => {
  const dispatch = useAppDispatch();

  const [searchVal, setSearchVal] = useState("");

  const handleSearchClick = () => {
    if (searchVal.trim().length === 0) {
      dispatch(actGetAllCountries());
    } else {
      dispatch(actGetCountryByName(searchVal));
    }
  };

  return (
    <div className="w-full max-w-md relative">
      <FontAwesomeIcon
        icon={faSearch}
        onClick={handleSearchClick}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
      />
      <input
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search for a country..."
        className="w-full pl-18 py-4 p-5 rounded-md shadow-sm bg-white dark:bg-blue-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 outline-0"
      />
    </div>
  );
};

export default SearchByCountryName;
