import axios, { Axios } from "axios";

import { Market, MarketPrices } from "@/shared/api/CryptoWatcherService/types";
import { getEnvironmentVariable } from "@/shared/utils/env";

const MAX_MARKET_LIMIT_RETURN_RESULTS = 20000;
const MAX_PAIRS_LIMIT_RETURN_RESULTS = 15000;

class CryptoWatcherHttpClient {
  private fetcher: Axios;

  constructor() {
    this.fetcher = axios.create({
      baseURL: "https://api.cryptowat.ch",
      headers: {
        "X-CW-API-Key": getEnvironmentVariable("VITE_CRYPTOWATCH_PUBLIC_API_KEY"),
      },
    });
  }

  getMarkets(limit: number = MAX_MARKET_LIMIT_RETURN_RESULTS, cursor?: string) {
    return this.fetcher.get<Market[]>("/markets", {
      params: {
        limit,
        cursor,
      },
    });
  }

  getPairs(cursor: string, limit: number = MAX_PAIRS_LIMIT_RETURN_RESULTS) {
    return this.fetcher.get<any>("/pairs");
  }

  getMarketPrices(cursor: string, limit: number = MAX_MARKET_LIMIT_RETURN_RESULTS) {
    return this.fetcher.get<MarketPrices[]>("/markets");
  }
}

export const cryptoWatcherApiClient = new CryptoWatcherHttpClient();
