import React from "react";
import CardMarket from "./CardMarket";

type Props = {};

const ListMarket = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <CardMarket />
      <CardMarket />
      <CardMarket />
      <CardMarket />
    </div>
  );
};

export default ListMarket;
