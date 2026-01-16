import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Mulico Tour & Travels";
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-(--color-primary)">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-(--text-main) mb-3">
          Page Not Found
        </h1>
        <p className="text-(--text-muted) mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">Go Back Home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
