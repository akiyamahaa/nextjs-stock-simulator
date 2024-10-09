import { getPosts } from "@/app/actions/posts";
import ListNew from "@/components/ListNew";
import React from "react";

type Props = {};

const NewsPage = async (props: Props) => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">News</h1>
      <ListNew posts={posts || []} />
    </div>
  );
};

export default NewsPage;
