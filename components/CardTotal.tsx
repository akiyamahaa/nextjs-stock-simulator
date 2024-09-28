import { cn } from "@/lib/utils";
import { ArrowUpRight, CircleDollarSign } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  amount: number;
  interestRate?: number;
  type: number;
};

const colorsIcon = [
  {
    color1: "bg-primary-50",
    color2: "#0056D2",
  },
  {
    color1: "bg-green-100",
    color2: "#16A34A",
  },
  {
    color1: "bg-red-50",
    color2: "#DC2626",
  },
  {
    color1: "bg-violet-50",
    color2: "#7C3AED",
  },
];

const CardTotal = ({ amount, title, type, interestRate }: Props) => {
  return (
    <div className="flex w-full flex-col-reverse items-start justify-between gap-4 rounded-2xl bg-white bg-card-total bg-bottom bg-no-repeat px-4 py-6 shadow-app lg:flex-row lg:items-center">
      <div className="space-y-1">
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm leading-5 text-gray-400">{title}</p>
          {interestRate && (
            <p className="flex flex-row items-center rounded-full bg-green-100 px-2 py-0.5 text-green-1">
              <ArrowUpRight size={16} color={"#16A34A"} strokeWidth={3} />
              {interestRate}%
            </p>
          )}
        </div>
        <p className="text-3xl font-semibold text-dark-2">${amount}</p>
      </div>
      <div className={cn("rounded-xl p-2.5", colorsIcon[type].color1)}>
        <CircleDollarSign color={colorsIcon[type].color2} size={24} />
      </div>
    </div>
  );
};

export default CardTotal;
