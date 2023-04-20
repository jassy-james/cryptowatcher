import { useState } from "react";
import useSwr from "swr";

import { fetcher } from "../lib";

import { MarketTradesFilters } from "@/features/MarketTradesFilters";
import { LineChart } from "@/shared/components/Charts";
import { NetworkErrorMessage } from "@/shared/components/ErrorMessage/NetworkErrorMessage";
import { Spinner } from "@/shared/components/Spinner/Spinner";
import {
  usePrepareMarketTradesData,
  usePrepareTradesChartConfig,
} from "@/widgets/MarketTradesChart/hooks/";

type TradesChartPropsType = {
  exchange: string;
  pair: string;
};

const DEFAULT_LIMIT_VALUE = 50;

export const TradesChart = ({ exchange, pair }: TradesChartPropsType) => {
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT_VALUE);

  const { data, isLoading, error } = useSwr(
    [`/api/markets/${exchange}/${pair}/trades`, limit],
    fetcher,
  );

  const chartData = usePrepareMarketTradesData(data?.result);
  const options = usePrepareTradesChartConfig({ data: chartData, pair, exchange });

  if (error) return <NetworkErrorMessage />;

  const onLimitFilterChange = (value: number) => {
    setLimit(value);
  };

  return (
    <>
      <MarketTradesFilters
        onLimitFilterChange={onLimitFilterChange}
        defaultLimitFilterValue={DEFAULT_LIMIT_VALUE}
      />
      {isLoading ? <Spinner /> : <LineChart options={options} />}
    </>
  );
};
