import { getStockHolding, IStock } from "@/app/actions/stock";
import { checkUser } from "@/lib/checkUser";
import { addCommas } from "@/lib/utils";
import React from "react";

const UserInfo = async ({ stock }: { stock: IStock }) => {
  const user = await checkUser();
  const totalShared = await getStockHolding(stock.id);
  return (
    <div className="flex flex-1 flex-row justify-between">
      <div className="space-y-1">
        <p className="text-base text-gray-800">Account Balance</p>
        <p className="text-base text-gray-400">
          ${addCommas(Number(user?.balance.toFixed(3)) || 0)}
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-base text-gray-800">Share</p>
        <p className="text-base text-gray-400">{totalShared}</p>
      </div>
      <div className="space-y-1">
        <p className="text-base text-gray-800">Profit/Loss</p>
        <p className="text-base text-gray-400">$0.00</p>
      </div>
    </div>
  );
};

export default UserInfo;
