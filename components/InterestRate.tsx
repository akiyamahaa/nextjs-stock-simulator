import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {
  isUp: boolean;
  value: number;
};

const InterestRate = ({ isUp, value }: Props) => {
  const color = isUp ? "#16A34A" : "#DC2626";
  const Icon = isUp ? ArrowUpRight : ArrowDownRight;
  return (
    <div
      className={cn(
        "flex h-full flex-row items-center text-base",
        isUp ? "text-green-600" : "text-red-600"
      )}
    >
      <Icon size={20} color={color} strokeWidth={2} />
      {value} %
    </div>
  );
};

export default InterestRate;
