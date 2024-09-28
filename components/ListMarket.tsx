import React from "react";
import CardMarket from "./CardMarket";

type Props = {};

const ListMarket = (props: Props) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Trending on Market</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CardMarket />
        <CardMarket />
        <CardMarket />
        <CardMarket />
      </div>
    </div>
  );
};

export default ListMarket;
