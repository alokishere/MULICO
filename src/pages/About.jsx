import React, { Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import AboutHero from "../components/sections/about/Hero"; // Load Hero eagerly

// Lazy Load Sections
const Stats = lazy(() => import("../components/sections/about/Stats"));
const Story = lazy(() => import("../components/sections/about/Story"));
const Values = lazy(() => import("../components/sections/about/Values"));
const Team = lazy(() => import("../components/sections/about/Team"));
const Testimonials = lazy(() =>
  import("../components/sections/about/Testimonials")
);
const FAQ = lazy(() => import("../components/sections/about/FAQ"));
const CTA = lazy(() => import("../components/sections/about/CTA"));

const About = () => {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <Suspense fallback={<Loader />}>
        <Stats />
        <Story />
        <Values />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </Suspense>
    </main>
  );
};

export default About;
