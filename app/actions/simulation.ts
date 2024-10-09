"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const nextDay = async () => {
  try {
    const { userId } = auth();
    await db.simulation.update({
      where: { userId: userId! },
      data: {
        currentDay: {
          increment: 1, // Increment currentDay by 1
        },
      },
    });
    revalidatePath("/market/");
  } catch (error) {
    console.log(error);
  }
};

export { nextDay };
