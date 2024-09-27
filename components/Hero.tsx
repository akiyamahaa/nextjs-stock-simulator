import Image from "next/image";
import React from "react";
import HeroBG from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={HeroBG}
        alt="hero-bg"
        className="h-[900px] w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white lg:left-40 lg:translate-x-0">
        <p className="text-center text-4xl font-bold leading-tight md:text-7xl">
          Look first/ <br /> Then leap.
        </p>
        <p className="text-center text-base md:text-xl">
          The best trades require research, then commitment.
        </p>
      </div>
    </div>
  );
};

export default Hero;
