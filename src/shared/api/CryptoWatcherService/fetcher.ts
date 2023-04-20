import axios from "axios";

import { getEnvironmentVariable } from "@/shared/utils/env";

const ENVIRONMENT_MODE = getEnvironmentVariable("MODE");

const axiosInstance = axios.create({
  baseURL:
    ENVIRONMENT_MODE === "development"
      ? getEnvironmentVariable("VITE_CRYPTOWATCH_PROXY_API_HOST")
      : getEnvironmentVariable("VITE_CRYPTOWATCH_API_HOST"),
  headers: {
    "X-CW-API-Key": getEnvironmentVariable("VITE_CRYPTOWATCH_PUBLIC_API_KEY"),
  },
});

export const cryptoWatchFetcher = (
  url: string,
  method: "POST" | "GET",
  params?: Record<string, any>,
) => axiosInstance.request({ url, method, params }).then((res) => res.data);
