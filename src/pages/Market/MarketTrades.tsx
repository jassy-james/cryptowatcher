import { NetworkErrorMessage } from "@/shared/components/ErrorMessage/NetworkErrorMessage";
import { useGetLocationStateParams } from "@/shared/hooks";
import { TradesChart } from "@/widgets/MarketTradesChart";

// TODO: добавить получение параметров из адресной строки
export const MarketTrades = () => {
  const [exchange, pair] = useGetLocationStateParams(["exchange", "pair"]);

  if (!exchange || !pair) {
    return <NetworkErrorMessage />;
  }

  return <TradesChart pair={pair} exchange={exchange} />;
};
