import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  isDarkMode: boolean;
  userDay: number | string;
};

const BoxCurrentDay = ({ isDarkMode, userDay }: Props) => {
  return (
    <div
      className={cn(
        "border rounded-xl px-4 py-1",
        isDarkMode ? "text-white border-white" : "border-primary text-primary"
      )}
    >
      Day {userDay}
    </div>
  );
};

export default BoxCurrentDay;
