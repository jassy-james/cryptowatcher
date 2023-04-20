import { Fetcher } from "swr";

import { cryptoWatchFetcher, MarketTrades, Response } from "@/shared/api";

export const fetcher: Fetcher<Response<MarketTrades[]>, [string, number]> = ([url, limitParam]) =>
  cryptoWatchFetcher(url, "GET", { limit: limitParam });
