import { createBrowserRouter } from "react-router-dom";

import { MarketTrades, Root, NotFound, Markets, About } from "@/pages";
import { routePaths } from "@/shared/constants/routePaths";

export const router = createBrowserRouter([
  {
    path: routePaths.root,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Markets />,
      },
      {
        path: routePaths.marketTrades.index,
        element: <MarketTrades />,
      },
      {
        path: routePaths.about.index,
        element: <About />,
      },
    ],
  },
]);
