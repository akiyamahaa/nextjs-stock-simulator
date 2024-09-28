import React from "react";
import AppleLogo from "@/public/images/apple.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  isHorizontal?: boolean;
};

const LogoCompany = ({ isHorizontal = true }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        isHorizontal ? "flex-row" : "flex-col items-start"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image src={AppleLogo} alt="logo" />
        <p className="rounded-sm bg-gray-100 px-2 py-0.5">AAPL</p>
      </div>
      <p className="text-left text-base font-semibold text-gray-800">
        Apple Inc.
      </p>
    </div>
  );
};

export default LogoCompany;
