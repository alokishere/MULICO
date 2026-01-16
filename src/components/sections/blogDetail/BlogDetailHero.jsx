import React from "react";
import { Link } from "react-router-dom";

const BlogDetailHero = ({ post }) => {
  return (
    <section className="pt-32 pb-8 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm text-(--text-muted) mb-6">
          <Link
            to="/"
            className="hover:text-(--color-primary) transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/blog"
            className="hover:text-(--color-primary) transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-(--text-main) font-medium truncate max-w-[150px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* Category & Date */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">•</span>
          <span className="text-(--text-muted) text-sm">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-main) leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author Meta */}
        {post.author && (
          <div className="flex items-center justify-center gap-3">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-(--text-main)">
                {post.author.name}
              </p>
              <p className="text-xs text-(--text-muted)">{post.author.role}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailHero;
