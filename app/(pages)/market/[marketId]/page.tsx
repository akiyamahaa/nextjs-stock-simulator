"use client";

import Image from "next/image";
import React, { useState } from "react";
import AppleLogo from "@/public/images/apple.svg";
import { Button } from "@/components/ui/button";
import { mockup } from "@/constants/mockup";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import TableTransaction from "./components/TableTransaction";
import CandleChart from "./components/CandleChart";

type Props = {};

enum EMode {
  SALE,
  BUY,
}

// const intialMoney = 100000;
const MarketDetailPage = (props: Props) => {
  const [numberOfDayStart] = useState(30);
  const [data, setData] = useState(mockup.slice(0, numberOfDayStart));
  const [mode, setMode] = useState<EMode | null>(null);
  console.log("🚀 ~ MarketDetailPage ~ mode:", mode);
  // const [currentIndex, setCurrentIndex] = useState(1);

  // const [balance, setBalance] = useState(intialMoney); // Starting balance
  // const [shares, setShares] = useState(0);
  // const [transactions, setTransactions] = useState<string[]>([]);

  // const handleNextDay = () => {
  //   if (currentIndex < mockup.length) {
  //     setData((prevData) => [...prevData, mockup[currentIndex]]);
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // const handleBuy = () => {
  //   const currentPrice = data[data.length - 1].close;
  //   if (balance >= currentPrice) {
  //     setShares(shares + 1);
  //     setBalance(balance - currentPrice);
  //     setTransactions([
  //       ...transactions,
  //       `Bought 1 share at $${currentPrice.toFixed(2)}`,
  //     ]);
  //   }
  // };

  // const handleSell = () => {
  //   if (shares > 0) {
  //     const currentPrice = data[data.length - 1].close;
  //     setShares(shares - 1);
  //     setBalance(balance + currentPrice);
  //     setTransactions([
  //       ...transactions,
  //       `Sold 1 share at $${currentPrice.toFixed(2)}`,
  //     ]);
  //   }
  // };

  // const calculateProfit = () => {
  //   const initialValue = intialMoney;
  //   const currentValue = balance + shares * data[data.length - 1].close;
  //   return currentValue - initialValue;
  // };

  return (
    <div>
      {/* Charts */}
      <div className="space-y-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <Image src={AppleLogo} alt="logo-market" className="size-24" />
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-3xl font-semibold text-gray-800">
                  Apple Inc.
                </h2>
                <p className="rounded-sm bg-gray-100 px-2 py-0.5">AAPL</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <p className="text-4xl font-bold text-gray-800">$228.87</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-2xl font-semibold text-green-600">+8.18</p>
                  <p className="text-2xl font-semibold text-green-600">
                    +3.71%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button variant={"outline"}>Next Day</Button>
          </div>
        </div>
        <div className="h-[500px]">
          <CandleChart data={data} />
        </div>
      </div>
      {/* Trading Panel */}
      <div className="mt-8 space-y-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="text-2xl font-semibold text-gray-800">
              Trading Panel
            </p>
          </div>
          <div className="flex flex-1 flex-row justify-between">
            <div className="space-y-1">
              <p className="text-base text-gray-800">Account Balance</p>
              <p className="text-base text-gray-400">$100,000.00</p>
            </div>
            <div className="space-y-1">
              <p className="text-base text-gray-800">Share</p>
              <p className="text-base text-gray-400">0</p>
            </div>
            <div className="space-y-1">
              <p className="text-base text-gray-800">Profit/Loss</p>
              <p className="text-base text-gray-400">$0.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Order</h2>
              <div className="relative flex flex-row overflow-hidden rounded-2xl bg-gray-100">
                <div
                  className={cn(
                    "flex-1 px-3 py-4 cursor-pointer hover:opacity-95",
                    mode === EMode.SALE && "bg-red-600"
                  )}
                  onClick={() => setMode(EMode.SALE)}
                >
                  <p
                    className={cn(
                      "text-base font-medium text-gray-400",
                      mode === EMode.SALE && "text-white"
                    )}
                  >
                    Sell
                  </p>
                  <p
                    className={cn(
                      "text-base font-medium text-gray-400",
                      mode === EMode.SALE && "text-white"
                    )}
                  >
                    228.04
                  </p>
                </div>
                <div
                  className={cn(
                    "flex-1 px-3 py-4 cursor-pointer hover:opacity-95",
                    mode === EMode.BUY && "bg-primary"
                  )}
                  onClick={() => setMode(EMode.BUY)}
                >
                  <p
                    className={cn(
                      "text-base font-medium text-gray-400 text-right",
                      mode === EMode.BUY && "text-white"
                    )}
                  >
                    Buy
                  </p>
                  <p
                    className={cn(
                      "text-base font-medium text-gray-400 text-right",
                      mode === EMode.BUY && "text-white"
                    )}
                  >
                    228.84
                  </p>
                </div>
                {/* Don't know */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <p className="rounded-sm bg-white px-3">0.3</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div className="flex-1 space-y-2.5">
                <h3 className="text-base font-medium text-gray-800">Shares</h3>
                <Input type="number" />
              </div>
              <div className="flex-1 space-y-2.5">
                <h3 className="text-base font-medium text-gray-800">USD</h3>
                <Input type="number" />
              </div>
            </div>

            {mode !== null && (
              <div
                className={cn(
                  "flex flex-1 items-center justify-center rounded-xl py-2",
                  mode === EMode.BUY ? "bg-primary" : "bg-red-600"
                )}
              >
                <p className="text-white">
                  {mode === EMode.BUY ? "Buy" : "Sale"}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Transaction History
            </h2>
            <TableTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetailPage;
