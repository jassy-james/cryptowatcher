import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useRef } from "react";
import useSwr from "swr";

import { cryptoWatcherApiClient } from "@/shared/api/CryptoWatcherService/httpClient";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  chart: {
    zooming: {
      type: "x",
    },
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
  ],
};

export const Chart = () => {
  const { data, isLoading, error } = useSwr("/api/user/123", cryptoWatcherApiClient.getMarkets);

  console.log({ data, isLoading, error });
  // const queryClient = useQueryClient();

  // const { data, error, isError, isLoading } = useQuery("getMarkets", () =>
  //   cryptoWatcherApiClient.getMarkets(10),
  // );

  // console.log({ data, error, isError, isLoading });

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />;
};
