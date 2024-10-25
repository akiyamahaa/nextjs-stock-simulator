import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { INITIAL_BALANCE, INITIAL_DAY } from "@/constants/utils";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // First check if the user already exists in the database
  let loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
    include: {
      simulation: true,
    },
  });

  if (loggedInUser) {
    if (!loggedInUser.simulation) {
      const simulation = await db.simulation.create({
        data: {
          currentDay: INITIAL_DAY,
          userId: loggedInUser.clerkUserId,
          startDate: new Date(),
        },
      });
      return { ...loggedInUser, simulation };
    }
    return loggedInUser;
  }

  // Attempt to create the user in a try-catch block
  try {
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        balance: INITIAL_BALANCE,
      },
    });

    const simulation = await db.simulation.create({
      data: {
        currentDay: INITIAL_DAY,
        userId: newUser.clerkUserId,
        startDate: new Date(),
      },
    });

    return { ...newUser, simulation };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (
      error.code === "P2002" &&
      error.meta &&
      error.meta.target.includes("clerkUserId")
    ) {
      // Handle duplicate entry by retrieving the existing user again
      loggedInUser = await db.user.findUnique({
        where: {
          clerkUserId: user.id,
        },
        include: {
          simulation: true,
        },
      });
      return loggedInUser;
    }
    throw error; // Throw other errors for debugging purposes
  }
};
