import React from "react";
import { blogPosts } from "../../../data/blog/blog";
import BlogCard from "../blog/BlogCard";

const BlogRelatedPosts = ({ currentPostId, category }) => {
  const related = blogPosts
    .filter((post) => post.category === category && post.id !== currentPostId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="pt-16 pb-8 border-t border-gray-100 mt-16">
      <h3 className="text-2xl font-bold text-(--text-main) mb-8">
        You Might Also Like
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogRelatedPosts;
