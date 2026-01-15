import React, { Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import Hero from "../components/sections/home/Hero"; // Import Hero directly for LCP

// Lazy Load Sections below the fold
const Features = lazy(() => import("../components/sections/home/Features"));
const Destinations = lazy(() =>
  import("../components/sections/home/Destinations")
);
const CTA = lazy(() => import("../components/sections/home/CTA"));

const Home = () => {
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
