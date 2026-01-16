import React from "react";

const BlogDetailContent = ({ content, image, title }) => {
  if (!content) return null;

  return (
    <article className="prose prose-lg max-w-none text-gray-600">
      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="space-y-8">
        {content.map((block, index) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={index}
                  id={block.id}
                  className="text-2xl md:text-3xl font-bold text-(--text-main) mt-10 mb-4 scroll-mt-24"
                >
                  {block.text}
                </h2>
              );
            case "h3":
              return (
                <h3
                  key={index}
                  id={block.id}
                  className="text-xl md:text-2xl font-bold text-(--text-main) mt-8 mb-3 scroll-mt-24"
                >
                  {block.text}
                </h3>
              );
            case "p":
              return (
                <p
                  key={index}
                  className="leading-relaxed text-(--text-muted) mb-4 text-lg"
                >
                  {block.text}
                </p>
              );
            case "ul":
              return (
                <ul
                  key={index}
                  className="list-disc pl-6 space-y-2 mb-6 text-(--text-muted) marker:text-(--color-primary)"
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "callout": {
              const variantStyles = {
                info: "bg-blue-50 border-blue-500 text-blue-800",
                warning: "bg-amber-50 border-amber-500 text-amber-800",
                success: "bg-green-50 border-green-500 text-green-800",
              };
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-l-4 ${
                    variantStyles[block.variant] || variantStyles.info
                  } my-8`}
                >
                  <h5 className="font-bold mb-1 flex items-center gap-2">
                    {block.title}
                  </h5>
                  <p className="text-sm opacity-90">{block.text}</p>
                </div>
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
};

export default BlogDetailContent;
