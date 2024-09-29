import Image from "next/image";
import React from "react";
import AppleLogo from "@/public/images/apple.svg";

type Props = {};

const TableTransaction = (props: Props) => {
  return (
    <div className="flex-1 overflow-y-hidden rounded-2xl border border-gray-200 p-4">
      {/* Transaction Row */}
      <div className="flex flex-row items-center">
        <div className="flex flex-1 flex-row items-center gap-2">
          <Image src={AppleLogo} alt="logo" className="size-8" />
          <p className="text-sm font-semibold text-gray-800">Apple Inc.</p>
        </div>
        <div className="flex flex-1 flex-row items-center justify-between">
          <p className="text-sm text-primary">Buy</p>
          <p className="text-sm text-gray-400">1</p>
          <p className="text-sm text-gray-400">228.34</p>
        </div>
      </div>
    </div>
  );
};

export default TableTransaction;
