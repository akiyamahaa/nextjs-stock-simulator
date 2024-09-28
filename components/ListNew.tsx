import React from "react";
import CardNew from "./CardNew";

type Props = {};

const ListNew = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CardNew />
      <CardNew />
      <CardNew />
      <CardNew />
    </div>
  );
};

export default ListNew;
