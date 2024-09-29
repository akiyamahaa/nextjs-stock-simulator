import React from "react";
import LogoCompany from "./LogoCompany";
import InterestRate from "./InterestRate";
import Link from "next/link";

type Props = {};

const CardMarket = (props: Props) => {
  return (
    <Link href={"/market/123"}>
      <div className="flex flex-col items-start rounded-2xl bg-white p-6 shadow-app">
        <LogoCompany isHorizontal={false} />
        <div className="w-full space-y-2 mt-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-400">Market cap</p>
            <p className="text-sm text-gray-800">$3.355</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-sm text-gray-800">$220.69</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-400">Change</p>
            <div className="text-sm text-gray-800">
              <InterestRate isUp={true} value={1.8} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMarket;