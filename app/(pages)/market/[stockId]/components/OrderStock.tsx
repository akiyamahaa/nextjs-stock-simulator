"use client";

import { IStock } from "@/app/actions/stock";
import { Input } from "@/components/ui/input";
import { addCommas, cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BUY = "buy";
const SELL = "sell";

interface Props {
  stock: IStock;
}

const OrderStock = ({ stock }: Props) => {
  console.log("🚀 ~ OrderStock ~ stock:", stock.candlesticks);
  const [mode, setMode] = useState("");
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(
    stock.candlesticks![stock.candlesticks!.length - 1].close
  );

  const createTrade = async () => {
    // TODO: Check enough balance, and enough quantity to buy sell
    try {
      await axios.post(`/api/trade/${stock.id}`, {
        tradeType: mode, // 'buy' or 'sell'
        quantity: quantity || 1, // Number of stocks to trade
        price: stock.candlesticks![stock.candlesticks!.length - 1].close, // Price per stock
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.refresh();
    } catch (error: any) {
      console.error(
        "Error creating trade:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="flex-1 space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Order</h2>
        <div className="relative flex flex-row overflow-hidden rounded-2xl bg-gray-100">
          <div
            className={cn(
              "flex-1 px-3 py-4 cursor-pointer hover:opacity-95",
              mode === SELL && "bg-red-600"
            )}
            onClick={() => setMode(SELL)}
          >
            <p
              className={cn(
                "text-base font-medium text-gray-400",
                mode === SELL && "text-white"
              )}
            >
              Sell
            </p>
            <p
              className={cn(
                "text-base font-medium text-gray-400",
                mode === SELL && "text-white"
              )}
            >
              {addCommas(
                stock.candlesticks![stock.candlesticks!.length - 1].close
              )}
            </p>
          </div>
          <div
            className={cn(
              "flex-1 px-3 py-4 cursor-pointer hover:opacity-95",
              mode === BUY && "bg-primary"
            )}
            onClick={() => setMode(BUY)}
          >
            <p
              className={cn(
                "text-base font-medium text-gray-400 text-right",
                mode === BUY && "text-white"
              )}
            >
              Buy
            </p>
            <p
              className={cn(
                "text-base font-medium text-gray-400 text-right",
                mode === BUY && "text-white"
              )}
            >
              {addCommas(
                stock.candlesticks![stock.candlesticks!.length - 1].close
              )}
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
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="flex-1 space-y-2.5">
          <h3 className="text-base font-medium text-gray-800">USD</h3>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {mode && (
        <div
          className={cn(
            "flex flex-1 items-center justify-center rounded-xl py-2 cursor-pointer",
            mode === BUY ? "bg-primary" : "bg-red-600"
          )}
          onClick={createTrade}
        >
          <p className="text-white">{mode === BUY ? "Buy" : "SELL"}</p>
        </div>
      )}
    </div>
  );
};

export default OrderStock;
