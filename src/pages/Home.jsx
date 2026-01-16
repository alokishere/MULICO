import React, { Suspense, lazy, useEffect } from "react";
import Loader from "../components/ui/Loader";
import Hero from "../components/sections/home/Hero"; // Import Hero directly for LCP

// Lazy Load Sections below the fold
const Features = lazy(() => import("../components/sections/home/Features"));
const Destinations = lazy(() =>
  import("../components/sections/home/Destinations")
);
const CTA = lazy(() => import("../components/sections/home/CTA"));

const Home = () => {
  useEffect(() => {
    document.title = "Home | Mulico Tour & Travels";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<Loader />}>
        <Features />
        <Destinations />
        <CTA />
      </Suspense>
    </main>
  );
};

export default Home;
