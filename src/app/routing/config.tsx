import { createBrowserRouter } from "react-router-dom";

import { About, Dashboard, Root, NotFound } from "@/pages";
import { routePaths } from "@/shared/constants/routePaths";

export const router = createBrowserRouter([
  {
    path: routePaths.root,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: routePaths.dashboard,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: routePaths.about,
    element: <About />,
  },
]);
