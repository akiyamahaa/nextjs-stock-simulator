import React from "react";
import CardNew from "./CardNew";
import { checkUser } from "@/lib/checkUser";
import { getLatestPosts, getPosts } from "@/app/actions/posts";

interface Props {
  type?: "latest" | "all";
}

const ListNew = async ({ type = "all" }: Props) => {
  const user = await checkUser();
  let posts;
  if (type === "latest") {
    posts = await getLatestPosts();
  } else {
    posts = await getPosts();
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <CardNew post={post} userDay={user?.simulation?.currentDay || 0} />
          </div>
        ))}
    </div>
  );
};

export default ListNew;
