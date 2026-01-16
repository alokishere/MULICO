import React from "react";

const BlogHero = () => {
  return (
    <section className="pt-32 pb-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--text-main) mb-4">
          Visa Updates & Guides
        </h1>
        <p className="text-lg text-(--text-muted) max-w-2xl mx-auto">
          Simple guides, country specific rules, and the latest immigration
          updates to keep you informed.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
