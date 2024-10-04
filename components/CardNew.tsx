/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from "next/image";
// import AppleLogo from "@/public/images/apple.svg";
import Link from "next/link";
import { IPost } from "@/app/actions/posts";

type Props = {
  post: IPost;
};

const CardNew = ({ post }: Props) => {
  return (
    <Link href={`/news/${post.id}`}>
      <div className="rounded-2xl bg-white shadow-app">
        <img
          src={post.imageUrl}
          alt="image"
          className="h-48 w-full rounded-t-2xl object-cover"
        />
        <div className="space-y-2.5 p-6">
          <div className="flex flex-row items-center gap-3">
            <img
              src={post.stock.symbol}
              alt="logo"
              className="size-8 rounded-full"
            />
            <p className="rounded-sm bg-gray-100 px-4 text-xs ">
              {post.stock.shortName}
            </p>
          </div>
          <h1 className="line-clamp-2 text-base font-semibold text-gray-800">
            {post.title}
          </h1>
          <p className="line-clamp-2 text-base text-gray-400">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
