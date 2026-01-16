import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
