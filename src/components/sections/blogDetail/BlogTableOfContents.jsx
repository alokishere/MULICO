import React from "react";
import { Link } from "react-router-dom";

const BlogTableOfContents = ({ content }) => {
  // Extract Headings
  const headings =
    content?.filter((block) => block.type === "h2" || block.type === "h3") ||
    [];

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block mb-8">
      <h4 className="text-sm font-bold text-(--text-muted) uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
        Table of Contents
      </h4>
      <ul className="space-y-3 text-sm">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.id}`}
              className="text-gray-600 hover:text-(--color-primary) hover:underline block transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTableOfContents;
