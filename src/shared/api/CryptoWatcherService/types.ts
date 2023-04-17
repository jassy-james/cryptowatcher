export type Market = {
  id: number;
  exchange: string;
  pair: string;
  active: boolean;
  route: string;
};

export type MarketPrices = Record<string, number>;
