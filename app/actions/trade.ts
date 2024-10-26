/* eslint-disable @typescript-eslint/no-explicit-any */
import { ETradeMode } from "@/constants/utils";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Stock, Trade } from "@prisma/client";
import { getStockById, getStockHoldingById, IStock } from "./stock";
import { getLatestCandleStick } from "@/lib/utils";

export interface ITrade extends Trade {
  stock: Stock;
}

const getTrades = async (stockId: number): Promise<ITrade[] | null> => {
  const { userId } = auth();
  try {
    const trades = await db.trade.findMany({
      where: {
        userId: userId!,
        stockId,
      },
      include: {
        stock: true,
      },
    });
    return trades;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getBuyTrades = async (stockId: number): Promise<ITrade[] | null> => {
  const { userId } = auth();
  try {
    const trades = await db.trade.findMany({
      where: {
        userId: userId!,
        stockId,
        tradeType: ETradeMode.BUY,
      },
      include: {
        stock: true,
      },
    });
    return trades;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export interface IGetAllStockHolding {
  stock: IStock | null;
  stockHolding: number;
  unrealizedProfitLoss: number;
}

const getAllStockHolding = async (): Promise<IGetAllStockHolding[] | []> => {
  const { userId } = auth();
  if (!userId) {
    return [];
  }
  try {
    const trades = await db.trade.findMany({
      where: { userId },
      select: { stockId: true },
      distinct: ["stockId"], // Using distinct to get unique stockIds directly
    });

    const uniqueStockIds = trades.map((trade) => trade.stockId);

    const allStockInfo = await Promise.all(
      uniqueStockIds.map(async (stockId) => {
        const [stock, stockHolding, allBuyTrades] = await Promise.all([
          getStockById(stockId),
          getStockHoldingById(stockId),
          getBuyTrades(stockId),
        ]);
        if (!stock) return null; // Handle any case where stock is not found
        const latestStick = getLatestCandleStick(stock!.candlesticks!);
        // Total Shares Purchased
        const totalBuyShares = allBuyTrades?.reduce(
          (total, currentTrade) => total + currentTrade.quantity,
          0
        );
        // Weighted Average Purchase Price
        const averageBuyPrice =
          allBuyTrades!.reduce(
            (total, current) => total + current.quantity * current.price,
            0
          ) / totalBuyShares!;
        // Unrealied profit/loss
        const unrealizedProfitLoss = latestStick
          ? (latestStick.close - averageBuyPrice) * stockHolding
          : 0;
        return { stock, stockHolding, unrealizedProfitLoss };
      })
    );
    return allStockInfo.filter(
      (info) => info !== null
    ) as IGetAllStockHolding[];
  } catch (error) {
    console.error("Error fetching stock holdings:", error);
    return [];
  }
};

export interface IInterestAndLoss {
  interest: number;
  loss: number;
}

const getInterestAndLossTrades = async (): Promise<IInterestAndLoss> => {
  const { userId } = auth();
  try {
    const trades = await db.trade.findMany({
      where: {
        userId: userId!,
      },
    });

    const tradesByStock = trades.reduce((acc: any, trade) => {
      if (!acc[trade.stockId]) {
        acc[trade.stockId] = { [ETradeMode.BUY]: [], [ETradeMode.SELL]: [] };
      }
      acc[trade.stockId][trade.tradeType].push(trade);
      return acc;
    }, {});

    let interest = 0;
    let loss = 0;

    Object.keys(tradesByStock).forEach((stockId) => {
      const { buy, sell } = tradesByStock[stockId];

      // Assuming one-to-one buy-sell pairing for simplicity (adjust logic for partial trades)
      for (let i = 0; i < Math.min(buy.length, sell.length); i++) {
        const buyPrice = buy[i].totalPrice;
        const sellPrice = sell[i].totalPrice;

        if (sellPrice > buyPrice) {
          interest += sellPrice - buyPrice; // Profit (Interest)
        } else if (sellPrice < buyPrice) {
          loss += buyPrice - sellPrice; // Loss
        }
      }
    });

    return { interest, loss };
  } catch (error) {
    console.log(error);
    return {
      interest: 0,
      loss: 0,
    };
  }
};

export {
  getTrades,
  getBuyTrades,
  getInterestAndLossTrades,
  getAllStockHolding,
};
