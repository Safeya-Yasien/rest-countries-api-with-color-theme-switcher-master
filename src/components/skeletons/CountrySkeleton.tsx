// src/components/CountrySkeleton.tsx
const CountrySkeleton = () => {
  return (
    <div
      className="animate-pulse bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
      role="presentation"
      aria-hidden="true"
    >
      {/* Placeholder for flag image */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      {/* Placeholder for country name */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
      {/* Placeholder for additional details */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
};

export default CountrySkeleton;
