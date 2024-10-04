import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export interface ICandleStick {
  id: number;
  stockId: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  date: Date;
  simulationDay: number;
}

export interface IStock {
  id: number;
  symbol: string;
  companyName: string;
  shortName: string;
  currentPrice: number;
  openingPrice: number;
  closingPrice: number;
  volume: number;
  candlesticks?: ICandleStick[];
}

async function getStocks(): Promise<IStock[] | null> {
  try {
    const stocks = await db.stock.findMany({});
    return stocks;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getStockById(stockId: number): Promise<IStock | null> {
  const { userId } = auth();
  try {
    const userSimulation = await db.simulation.findUnique({
      where: {
        userId: userId!,
      },
      select: {
        currentDay: true, // Select only the current simulation day
      },
    });
    if (!userSimulation) {
      throw new Error("Simulation not found for the user");
    }
    const stock = await db.stock.findUnique({
      where: {
        id: stockId,
      },
      include: {
        candlesticks: {
          where: {
            simulationDay: {
              lte: userSimulation.currentDay, // Filter candlesticks where simulationDay is <= current simulation day
            },
          },
          orderBy: {
            simulationDay: "asc", // Order candlesticks by simulationDay in ascending order
          },
        },
      },
    });
    return stock;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getStocks, getStockById };
