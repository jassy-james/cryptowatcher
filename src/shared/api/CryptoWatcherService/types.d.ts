export type Market = {
  id: number;
  exchange: string;
  pair: string;
  active: boolean;
  route: string;
};

export type Response<T> = {
  result: T;
  cursor?: {
    last: string;
    hasMore: boolean;
  };
  allowance: {
    cost: number;
    remaining: number;
    remainingPaid: number;
    account: string;
  };
};

type MarketTradesId = number;
type MarketTradesTimestamp = number;
type MarketTradesPrice = number;
type MarketTradesAmount = number;

export type MarketTrades = [
  MarketTradesId,
  MarketTradesTimestamp,
  MarketTradesPrice,
  MarketTradesAmount,
];
