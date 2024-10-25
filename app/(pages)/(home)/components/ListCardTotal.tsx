import { getInterestAndLossTrades } from "@/app/actions/trade";
import CardTotal from "@/components/CardTotal";
import { INTIAL_BALANCE } from "@/constants/utils";
import { checkUser } from "@/lib/checkUser";
import React from "react";

const ListCardTotal = async () => {
  const user = await checkUser();
  const { interest, loss } = await getInterestAndLossTrades();
  const changeRateAsset = user?.balance
    ? ((user?.balance - INTIAL_BALANCE) / INTIAL_BALANCE) * 100
    : 0;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <CardTotal
        title="Total Asset"
        amount={user?.balance || 0}
        type={0}
        interestRate={changeRateAsset}
      />
      <CardTotal title="Total Interest" amount={interest} type={1} />
      <CardTotal title="Total Loss" amount={loss} type={2} />
      <CardTotal title="Total Capital" amount={INTIAL_BALANCE} type={3} />
    </div>
  );
};

export default ListCardTotal;
