"use client";

import { memo, useMemo } from "react";
import { ICandleStick } from "@/app/actions/stock";
import {
  IgrFinancialChart,
  IgrFinancialChartModule,
} from "igniteui-react-charts";

IgrFinancialChartModule.register();

type Props = {
  data: ICandleStick[];
};

// eslint-disable-next-line react/display-name
const CandleChart = memo(({ data }: Props) => {
  console.log("🚀 ~ CandleChart ~ data:", data);
  const dataDisplay = useMemo(
    () =>
      data.map((item) => ({
        close: item.close,
        open: item.open,
        high: item.high,
        low: item.low,
        date: item.date,
        volume: item.volume,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.length]
  );

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
        dataSource={dataDisplay}
      />
    </div>
  );
});

export default CandleChart;
