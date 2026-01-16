import React from "react";

const BlogAuthorCard = ({ author }) => {
  if (!author) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center">
      <img
        src={author.image}
        alt={author.name}
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-sm"
      />
      <h4 className="font-bold text-(--text-main) mb-1">{author.name}</h4>
      <p className="text-xs text-(--text-muted) uppercase tracking-wide mb-3">
        {author.role}
      </p>
      <p className="text-sm text-gray-500 italic">
        "Expert in immigration law and global visa policies with over 10 years
        of experience."
      </p>
    </div>
  );
};

export default BlogAuthorCard;
