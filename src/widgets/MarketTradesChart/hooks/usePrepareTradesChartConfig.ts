import { Options as HightChartsOptions } from "highcharts";
import { useMemo } from "react";

type UsePrepareTradesChartConfigParamsType = {
  data: number[];
  exchange: string;
  pair: string;
};

export const usePrepareTradesChartConfig = ({
  data,
  exchange,
  pair,
}: UsePrepareTradesChartConfigParamsType) =>
  useMemo<HightChartsOptions>(
    () => ({
      title: {
        text: "График последних сделок на бирже с монетой",
      },
      yAxis: {
        title: {
          text: "Значение в $",
        },
      },
      chart: {
        zooming: {
          type: "x",
        },
      },
      series: [
        {
          name: `Биржа ${exchange}, монета ${pair}`,
          type: "line",
          data,
        },
      ],
    }),
    [data],
  );
