import React from "react";
import NewImage from "@/public/images/new1.png";
import Image from "next/image";
import AppleLogo from "@/public/images/apple.svg";
import Link from "next/link";

type Props = {};

const CardNew = (props: Props) => {
  return (
    <Link href={"/news/123"}>
      <div className="bg-white rounded-2xl shadow-app">
        <Image
          src={NewImage}
          alt="image"
          className="rounded-t-2xl h-48 w-full object-cover"
        />
        <div className="p-6 space-y-2.5">
          <div className="flex flex-row items-center gap-3">
            <Image src={AppleLogo} alt="logo" className="w-8 h-8" />
            <p className="text-xs rounded-sm bg-gray-100 px-4 ">AAPL</p>
          </div>
          <h1 className="font-semibold text-base text-gray-800 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur. Etiam nisl neque orci nullam
            non.
          </h1>
          <p className="text-base text-gray-400 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur. Etiam nisl neque orci nullam
            non. Porta egestas enim eget non pellentesque. Praesent diam
            scelerisque posuere at semper sed felis vehicula ut. Consequat
            volutpat ut aliquam pulvinar senectus nullam pretium quis. Vulputate
            rhoncus adipiscing netus sed. Amet sed mi amet sed mattis mattis.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
