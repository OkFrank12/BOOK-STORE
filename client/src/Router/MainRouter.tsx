import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/common/Layout";
import HomePage from "../Pages/HomePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
