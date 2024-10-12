"use client";
import { resetDay } from "@/app/actions/simulation";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const ButtonResetGame = (props: Props) => {
  const handleReset = async () => {
    await resetDay();
  };
  return (
    <Button className="w-full" variant={"outline"} onClick={handleReset}>
      Reset Game
    </Button>
  );
};

export default ButtonResetGame;
