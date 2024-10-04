/* eslint-disable @next/next/no-img-element */
import { IStock } from "@/app/actions/stock";
import { addCommas } from "@/lib/utils";
import React from "react";

type Props = {
  stock: IStock;
};

const StockInfo = ({ stock }: Props) => {
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
              ${addCommas(stock.currentPrice)}
            </p>
            <div className="flex flex-row items-center gap-2">
              {/* TODO: Add Formula */}
              <p className="text-2xl font-semibold text-green-600">+8.18</p>
              <p className="text-2xl font-semibold text-green-600">+3.71%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
