import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: { stockId: string } }
) => {
  try {
    const { userId } = auth();
    const body = await req.json(); // Parse the JSON body from the request
    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 400 });
    }
    if (!params.stockId) {
      return new NextResponse("stock Id is missing", { status: 400 });
    }
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: { simulation: true }, // Include the user's simulation
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    // Check if the user has a simulation

    const { tradeType, quantity, price } = body;
    console.log(body, user.simulation!.currentDay);
    await db.trade.create({
      data: {
        userId,
        stockId: parseInt(params.stockId), // Ensure stockId is an integer
        tradeType,
        quantity,
        price,
        totalPrice: quantity * price, // Calculate total price
        tradeDay: user.simulation!.currentDay,
      },
    });
    return new NextResponse("Success Trade", { status: 201 });
  } catch (error) {
    console.log(`STORES_POST:${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
