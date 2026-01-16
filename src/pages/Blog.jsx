import React, { Suspense, lazy } from "react";
import BlogHero from "../components/sections/blog/BlogHero";
import BlogFilters from "../components/sections/blog/BlogFilters";
import Loader from "../components/ui/Loader";
import { blogPosts } from "../data/blog/blog";

// Lazy loading the main content
const BlogGrid = lazy(() => import("../components/sections/blog/BlogGrid"));
const BlogSidebar = lazy(() =>
  import("../components/sections/blog/BlogSidebar")
);
const Pagination = lazy(() => import("../components/sections/blog/Pagination"));

const Blog = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero />

      {/* Filters Section */}
      <BlogFilters />

      {/* Main Content Area */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column (Grid) */}
            <div className="lg:col-span-8">
              <Suspense fallback={<Loader />}>
                <BlogGrid posts={blogPosts} />
                <Pagination />
              </Suspense>
            </div>

            {/* Right Sidebar Column */}
            <aside className="lg:col-span-4">
              <Suspense
                fallback={
                  <div className="h-96 bg-gray-50 rounded-2xl animate-pulse"></div>
                }
              >
                <BlogSidebar />
              </Suspense>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
