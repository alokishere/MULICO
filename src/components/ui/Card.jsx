import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-(--border-light) ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
