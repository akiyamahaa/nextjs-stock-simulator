import Image from "next/image";
import React from "react";
import AppleLogo from "@/public/images/apple.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const MarketDetailPage = (props: Props) => {
  return (
    <div>
      {/* Charts */}
      <div>
        <div className="flex md:flex-row flex-col md:justify-between items-start gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Image src={AppleLogo} alt="logo-market" className="w-24 h-24" />
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-row items-center gap-4">
                <h2 className="font-semibold text-3xl text-gray-800">
                  Apple Inc.
                </h2>
                <p className="rounded-sm bg-gray-100 px-2 py-0.5">AAPL</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <p className="text-4xl font-bold text-gray-800">$228.87</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-2xl font-semibold text-green-600">+8.18</p>
                  <p className="text-2xl font-semibold text-green-600">
                    +3.71%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button variant={"outline"}>Next Day</Button>
          </div>
        </div>
      </div>
      {/* Trading Panel */}
    </div>
  );
};

export default MarketDetailPage;
