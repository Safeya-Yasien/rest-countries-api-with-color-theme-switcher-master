import { useRouteError, isRouteErrorResponse } from "react-router";

const Error = () => {
  const error = useRouteError();

  let message = "Something went wrong.";
  let status = 500;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.statusText || message;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-50 dark:bg-blue-950">
      <div className="text-center p-8">
        <h1 className="text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
          {status}
        </h1>
        <p className="text-xl text-grey-950 dark:text-white mb-4">{message}</p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-sm font-bold text-white bg-blue-900 dark:bg-white dark:text-blue-900 rounded shadow hover:opacity-90 transition"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default Error;
