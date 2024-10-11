import { ICandleStick } from "@/app/actions/stock";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getLatestCandleStick = (
  candleLists: ICandleStick[],
  userDay: number
) => {
  const last = candleLists.find((item) => item.simulationDay == userDay - 1);
  return last;
};
