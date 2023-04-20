import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useRef } from "react";

type LineChartPropsType = {
  options: Highcharts.Options;
};

export const LineChart = ({ options }: LineChartPropsType) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />;
};
