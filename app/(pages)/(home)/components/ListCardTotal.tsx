import CardTotal from "@/components/CardTotal";
import React from "react";

const ListCardTotal = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
      <CardTotal
        title="Total Asset"
        amount={3916}
        type={0}
        interestRate={1.3}
      />
      <CardTotal title="Total Interest" amount={3916} type={1} />
      <CardTotal title="Total Loss" amount={3916} type={2} interestRate={1.3} />
      <CardTotal title="Total Capital" amount={3916} type={3} />
    </div>
  );
};

export default ListCardTotal;
