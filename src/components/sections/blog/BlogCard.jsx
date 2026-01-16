import React from "react";
import { Link } from "react-router-dom"; // Use Link for SPA nav

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="224"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-3 text-xs font-medium mb-3">
          <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600">
            {post.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{post.date}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-(--text-main) mb-3 leading-tight group-hover:text-(--color-primary) transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-(--text-muted) text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-(--color-primary) text-sm font-semibold hover:underline group/link"
          >
            Read Article
            <svg
              className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
