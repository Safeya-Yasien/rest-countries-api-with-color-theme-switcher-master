import type { TCountry } from "@/types";
import { Link } from "react-router";

const Country = ({ country }: { country: TCountry }) => {
  const { name, population, region, capital, flag, cca3 } = country;

  return (
    <Link
      to={`/alpha/${cca3}`}
      className="flex flex-col bg-white dark:bg-blue-900 shadow-md rounded-lg overflow-hidden"
    >
      {/* img */}
      <div className="h-48 w-full">
        <img src={flag} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* info */}
      <div className="p-6 flex flex-col gap-2">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
          {name}
        </h2>

        <ul className="text-sm text-gray-700 dark:text-white space-y-1">
          <li>
            <span className="font-semibold">Population:</span>{" "}
            <span className="text-gray-400 dark:text-gray-200">
              {population.toLocaleString()}
            </span>
          </li>
          <li>
            <span className="font-semibold">Region:</span>{" "}
            <span className="text-gray-400 dark:text-gray-200">{region}</span>
          </li>
          <li>
            <span className="font-semibold">Capital:</span>{" "}
            <span className="text-gray-400 dark:text-gray-200">{capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
};
export default Country;
