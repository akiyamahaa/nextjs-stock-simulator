import ListMarket from "@/components/ListMarket";
import React from "react";

type Props = {};

const MarketPage = (props: Props) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Marketplace</h1>
      <ListMarket />
    </div>
  );
};

export default MarketPage;
