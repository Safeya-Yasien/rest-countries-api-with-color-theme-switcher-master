import { createBrowserRouter, RouterProvider } from "react-router";

// layouts
import MainLayout from "@layouts/MainLayout";

// pages
import CountryDetailsPage from "@pages/CountryDetailsPage";
import Error from "@pages/Error";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "alpha/:code",
        element: <CountryDetailsPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
