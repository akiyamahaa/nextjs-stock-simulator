import React from "react";
import CardNew from "./CardNew";

type Props = {};

const ListNew = (props: Props) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Lastest Stock News</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardNew />
        <CardNew />
        <CardNew />
        <CardNew />
      </div>
    </div>
  );
};

export default ListNew;
