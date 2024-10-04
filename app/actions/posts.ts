"use server";
import { db } from "@/lib/db";
import { IStock } from "./stock";

export interface IPost {
  id: number;
  content: string;
  description: string;
  title: string;
  imageUrl: string;
  stockId: number;
  simulationDay: number;
  stock: IStock;
}

async function getPosts(): Promise<IPost[] | null> {
  try {
    const posts = await db.posts.findMany({
      include: {
        stock: true, // Include related Stock information
      },
    });
    return posts;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPostById(postId: number): Promise<IPost | null> {
  try {
    const post = await db.posts.findUnique({
      where: {
        id: postId,
      },
      include: {
        stock: true, // Include related Stock information
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getPosts, getPostById };
