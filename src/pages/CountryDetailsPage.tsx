import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@store/app/hooks";
import actGetCountryDetails from "@store/countries/act/actGetCountryDetails";

const CountryDetailsPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { country, loading, error } = useAppSelector(
    (state) => state.countryDetails
  );

  useEffect(() => {
    if (!code) {
      navigate("/");
      return;
    }
    dispatch(actGetCountryDetails(code));
  }, [code, dispatch, navigate]);

  // Render no data state
  if (!country) {
    return (
      <div className="text-center py-10 text-lg" aria-live="polite">
        No country data available
      </div>
    );
  }

  return (
    <div className="text-black dark:text-white py-6">
      {/* Back Button */}
      <button
        className="dark:bg-blue-900 flex items-center space-x-2 px-10 py-3 rounded shadow-[0px_0px_8px_0px_rgba(0,0,0,0.4)] cursor-pointer font-light"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Back</span>
      </button>

      {/* Loading and Error Messages */}
      <div className="mt-20">
        {loading === "pending" && (
          <div className="text-center py-4 text-lg" aria-live="polite">
            Loading country details...
          </div>
        )}
        {error && (
          <div
            className="text-center py-4 text-red-500 text-lg"
            role="alert"
            aria-live="assertive"
          >
            Error: {error}
            <button
              className="ml-4 underline hover:text-red-700 cursor-pointer"
              onClick={() => code && dispatch(actGetCountryDetails(code))}
            >
              Retry
            </button>
          </div>
        )}
      </div>

      {/* Country Details Section */}
      <div className="mt-20 flex flex-col lg:flex-row gap-4 md:gap-30">
        {/* Flag */}
        <div className="lg:w-1/2">
          <div className="">
            <img
              className="w-full h-full object-cover"
              src={country.flag}
              alt={country.name}
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-center">
          <h1 className="text-2xl font-extrabold mb-4">{country.name}</h1>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <p>
                <span className="font-semibold dark:text-white">
                  Native Name:
                </span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.name}
                </span>
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                < span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.region}
                </span>
              </p>
              <p>
                <span>Sub Region: </span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.subregion}
                </span>
              </p>
              <p>
                <span>Capital:</span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.capital}
                </span>
              </p>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 space-y-2">
              <p>
                <span>Top Level Domain:</span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.topLevelDomain}
                </span>
              </p>
              <p>
                <span>Currencies:</span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.currencies}
                </span>
              </p>
              <p>
                <span>Languages:</span>{" "}
                <span className="text-grey-400 dark:text-[#ded7d7]">
                  {country.languages.join(", ")}
                </span>
              </p>
            </div>
          </div>

          {/* Borders */}
          <div className="mt-10 flex flex-col md:flex-row md:gap-4 md:items-center">
            <p className="font-semibold mb-4 md:mb-0 text-nowrap">
              Border Countries:
            </p>
            <div className="flex flex-wrap gap-4">
              {country.borders.map((border: string) => (
                <button
                  key={border}
                  className="px-10 py-1.5 rounded-sm shadow-lg text-sm dark:text-[#ded7d7] bg-white dark:bg-blue-900"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;