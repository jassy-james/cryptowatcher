import { Spin } from "antd";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/routing";

export const withRouter = () => () => <RouterProvider router={router} fallbackElement={<Spin />} />;
