import React from "react";
import CardNew from "./CardNew";
import { getPosts } from "@/app/actions/posts";

const ListNew = async () => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <CardNew post={post} />
          </div>
        ))}
    </div>
  );
};

export default ListNew;
