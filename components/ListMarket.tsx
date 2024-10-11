import React from "react";
import CardMarket from "./CardMarket";
import { getStocks } from "@/app/actions/stock";
import { checkUser } from "@/lib/checkUser";

const ListMarket = async () => {
  const stocks = await getStocks();
  console.log("🚀 ~ ListMarket ~ stocks:", stocks);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stocks?.map((stock) => (
        <div key={stock.id}>
          <CardMarket stock={stock} />
        </div>
      ))}
    </div>
  );
};

export default ListMarket;
