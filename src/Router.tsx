import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { AnimalDetails } from "./pages/AnimalDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal/:animalId",
        element: <AnimalDetails />,
      },
    ],
  },
]);
