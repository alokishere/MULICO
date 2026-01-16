import React from "react";
import { categories } from "../../../data/blog/blog";

const BlogFilters = () => {
  return (
    <div className="py-8 border-b border-gray-100 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="w-full lg:w-72 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) outline-none transition-all text-sm bg-white"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-(--color-primary) text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-(--text-muted) hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
            <span className="text-sm text-(--text-muted)">Sort by:</span>
            <div className="relative inline-block text-left group">
              <button className="flex items-center gap-1 text-sm font-bold text-(--text-main)">
                Latest
                <svg
                  className="w-4 h-4 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
