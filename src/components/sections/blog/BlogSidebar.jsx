import React from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { popularPosts } from "../../../data/blog/blog";

const BlogSidebar = () => {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Popular Posts */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="text-(--color-primary) font-bold mb-6">Popular Posts</h4>
        <div className="space-y-5">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h5 className="text-sm font-bold text-(--text-main) leading-snug mb-1 group-hover:text-(--color-primary) transition-colors line-clamp-2">
                  {post.title}
                </h5>
                <p className="text-xs text-(--text-muted)">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Widget */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="text-(--color-primary) font-bold mb-2">
          Subscribe to Updates
        </h4>
        <p className="text-xs text-(--text-muted) mb-4">
          Get the latest immigration news and visa guides directly to your
          inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-(--color-primary) outline-none text-sm"
          />
          <Button className="w-full text-sm py-2.5 shadow-none">
            Subscribe Now
          </Button>
        </form>
      </div>

      {/* Expert Advice CTA */}
      <div className="bg-[#2563eb] rounded-2xl p-8 text-center text-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h4 className="font-bold mb-2">Need Expert Advice?</h4>
        <p className="text-blue-100 text-xs mb-6 leading-relaxed">
          Book a free 15-minute consultation with our senior consultants.
        </p>

        <Button className="w-full bg-black hover:bg-black/80 hover:scale-105 text-sm py-2.5 border-none shadow-lg">
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default BlogSidebar;
