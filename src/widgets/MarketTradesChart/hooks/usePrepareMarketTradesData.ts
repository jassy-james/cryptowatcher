import { MarketTrades } from "@/shared/api";

export const usePrepareMarketTradesData = (data: MarketTrades[] | undefined) => {
  if (!data?.length) return [];

  return data.map(([, , price]) => price);
};
