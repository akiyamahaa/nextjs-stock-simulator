import {
  IgrFinancialChart,
  IgrFinancialChartModule,
} from "igniteui-react-charts";
import React from "react";

IgrFinancialChartModule.register();

type Props = {
  data: unknown;
};

const CandleChart = (data: Props) => {
  return (
    <div className="size-full bg-white">
      <IgrFinancialChart
        width="100%"
        height="100%"
        chartType="Candle"
        zoomSliderType="Candle"
        volumeType="Area"
        overlayBrushes="rgba(5, 138, 0, 0.17)"
        overlayOutlines="rgba(5, 138, 0, 0.4)"
        overlayThickness={1}
        dataSource={data}
      />
    </div>
  );
};

export default CandleChart;
