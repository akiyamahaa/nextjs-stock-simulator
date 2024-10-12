"use client";
import { nextDay } from "@/app/actions/simulation";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const ButtonNextDay = (props: Props) => {
  const handleNextDay = async () => {
    await nextDay();
  };
  return (
    <Button className="w-full" variant={"outline"} onClick={handleNextDay}>
      Next Day
    </Button>
  );
};

export default ButtonNextDay;
