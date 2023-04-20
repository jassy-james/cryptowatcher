import { LimitFilter } from "./LimitFilter";

import "../styles/MarketTradesFilters.scss";

type MarketTradesFiltersPropsType = {
  defaultLimitFilterValue: number;
  onLimitFilterChange: (limit: number) => void;
};

export const MarketTradesFilters = ({
  defaultLimitFilterValue,
  onLimitFilterChange,
}: MarketTradesFiltersPropsType) => (
  <div className="market-trades-filters">
    <LimitFilter onLimitFilterChange={onLimitFilterChange} defaultValue={defaultLimitFilterValue} />
  </div>
);
