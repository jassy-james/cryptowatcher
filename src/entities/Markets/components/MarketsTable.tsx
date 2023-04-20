import { useNavigate } from "react-router-dom";
import useSwr from "swr";

import { useColumnConfig } from "../hooks/useColumnConfig";

import { cryptoWatchFetcher, Market, Response } from "@/shared/api";
import { NetworkErrorMessage } from "@/shared/components/ErrorMessage/NetworkErrorMessage";
import { Table } from "@/shared/components/Table";
import { routePaths } from "@/shared/constants/routePaths";

import "../styles/MarketsTable.scss";

export const MarketsTable = () => {
  const navigate = useNavigate();
  const columnConfig = useColumnConfig();

  // INFO: Из cryptowatch сервиса приходят не уникальные идентификаторы
  const { data, isLoading, error } = useSwr<Response<Market[]>>("/api/markets", (url) =>
    cryptoWatchFetcher(url, "GET"),
  );

  const onRow = ({ exchange, pair, active }: Market) => ({
    onClick: () => {
      if (active) {
        navigate(routePaths.marketTrades.index, { state: { exchange, pair } });
      }
    },
  });

  if (error) {
    return <NetworkErrorMessage />;
  }

  return (
    <Table
      key="id"
      className="markets-table"
      columns={columnConfig}
      dataSource={data?.result}
      loading={isLoading}
      onRow={onRow}
    />
  );
};
