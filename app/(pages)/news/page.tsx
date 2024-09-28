import ListNew from "@/components/ListNew";
import React from "react";

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">News</h1>
      <ListNew />
    </div>
  );
};

export default NewsPage;
