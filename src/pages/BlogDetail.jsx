import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import BlogDetailHero from "../components/sections/blogDetail/BlogDetailHero";
import BlogDetailContent from "../components/sections/blogDetail/BlogDetailContent";
import BlogTableOfContents from "../components/sections/blogDetail/BlogTableOfContents";
import BlogAuthorCard from "../components/sections/blogDetail/BlogAuthorCard";
import BlogDetailCTA from "../components/sections/blogDetail/BlogDetailCTA";
import BlogRelatedPosts from "../components/sections/blogDetail/BlogRelatedPosts";
import Loader from "../components/ui/Loader";
import { blogPosts } from "../data/blog/blog";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setLoading(true);
    const foundPost = blogPosts.find((p) => p.slug === slug);

    // Simulate small network delay for effect
    const timer = setTimeout(() => {
      setPost(foundPost);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Mulico Blog`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  // 404 State
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          The article you are looking for might have been removed or the link is
          broken.
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 bg-(--color-primary) text-white rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogDetailHero post={post} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <BlogDetailContent
              content={post.content}
              image={post.image}
              title={post.title}
            />

            <BlogRelatedPosts
              currentPostId={post.id}
              category={post.category}
            />
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Table of Contents (Desktop Only) */}
            {post.content && post.content.length > 0 && (
              <BlogTableOfContents content={post.content} />
            )}

            {/* Author Card */}
            {post.author && <BlogAuthorCard author={post.author} />}

            {/* CTA Widget */}
            <BlogDetailCTA />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
