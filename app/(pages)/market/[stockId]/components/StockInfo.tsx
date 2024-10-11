/* eslint-disable @next/next/no-img-element */
import { IStock } from "@/app/actions/stock";
import { checkUser } from "@/lib/checkUser";
import { addCommas, cn } from "@/lib/utils";
import React from "react";

type Props = {
  stock: IStock;
};

const StockInfo = async ({ stock }: Props) => {
  const user = await checkUser();
  const latestCandleStick = stock.candlesticks?.find(
    (data) => data.simulationDay === user?.simulation?.currentDay! - 1
  );
  const nearLastestCandleStick = stock.candlesticks?.find(
    (data) => data.simulationDay === user?.simulation?.currentDay! - 2
  );
  const change = latestCandleStick?.close! - nearLastestCandleStick?.close!;
  const percentChange = (change / nearLastestCandleStick?.close!) * 100;
  return (
    <div>
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <img
          src={stock?.symbol}
          alt="logo-market"
          className="size-24 rounded-full"
        />
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              {stock?.companyName}
            </h2>
            <p className="rounded-sm bg-gray-100 px-2 py-0.5">
              {stock?.shortName}
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className="text-4xl font-bold text-gray-800">
              ${addCommas(Number(latestCandleStick?.close))}
            </p>
            <div className="flex flex-row items-center gap-2">
              {/* TODO: Add Formula */}
              <p
                className={cn(
                  "text-2xl font-semibold",
                  change > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {change.toFixed(2)}
              </p>
              <p
                className={cn(
                  "text-2xl font-semibold",
                  percentChange > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {percentChange.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
