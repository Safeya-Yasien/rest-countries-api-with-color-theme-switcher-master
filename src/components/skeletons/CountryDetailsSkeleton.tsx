const CountryDetailsSkeleton = () => {
  return (
    <div className="animate-pulse py-6" role="presentation" aria-hidden="true">
      {/* Back Button Skeleton */}
      <div className="flex items-center space-x-2 px-10 py-3 rounded bg-gray-200 dark:bg-gray-700 w-32 mb-8"></div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-30 mt-20">
        {/* Flag Skeleton */}
        <div className="lg:w-1/2">
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Details Skeleton */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-4">
          {/* Title */}
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          {/* Details Columns */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1 space-y-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"
                ></div>
              ))}
            </div>
            <div className="flex-1 space-y-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"
                ></div>
              ))}
            </div>
          </div>
          {/* Borders Skeleton */}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center mt-10">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4 md:mb-0"></div>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsSkeleton;
