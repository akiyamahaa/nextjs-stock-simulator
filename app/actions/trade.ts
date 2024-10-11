import { ETradeMode } from "@/constants/utils";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Stock, Trade } from "@prisma/client";

export interface ITrade extends Trade {
  stock: Stock;
}

const getTrades = async (stockId: number): Promise<ITrade[] | null> => {
  const { userId } = auth();
  try {
    const trades = await db.trade.findMany({
      where: {
        userId: userId!,
        stockId: stockId,
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
        stockId: stockId,
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
    console.log("🚀 ~ tradesByStock ~ tradesByStock:", tradesByStock);

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

export { getTrades, getBuyTrades, getInterestAndLossTrades };
