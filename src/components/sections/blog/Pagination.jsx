import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-16 pb-20">
      <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-(--color-primary) text-white font-medium shadow-lg shadow-blue-500/30">
        1
      </button>
      <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
        2
      </button>
      <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
        3
      </button>

      <span className="w-10 text-center text-gray-400">...</span>

      <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
        8
      </button>

      <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
