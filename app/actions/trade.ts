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

export { getTrades, getBuyTrades };
