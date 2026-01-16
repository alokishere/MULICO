import React, { Suspense, lazy, useEffect } from "react";
import Loader from "../components/ui/Loader";
import ServiceHero from "../components/sections/services/Hero"; // Eager load

// Lazy Load Sections
const ServiceGrid = lazy(() =>
  import("../components/sections/services/ServiceGrid")
);
const ServiceDetails = lazy(() =>
  import("../components/sections/services/ServiceDetails")
);
const Process = lazy(() => import("../components/sections/services/Process"));
const Pricing = lazy(() => import("../components/sections/services/Pricing"));
const ServiceFAQ = lazy(() =>
  import("../components/sections/services/ServiceFAQ")
);
const CTA = lazy(() => import("../components/sections/services/CTA"));

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Mulico Tour & Travels";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <ServiceHero />
      <Suspense fallback={<Loader />}>
        <ServiceGrid />
        <ServiceDetails />
        <Process />
        <Pricing />
        <ServiceFAQ />
        <CTA />
      </Suspense>
    </main>
  );
};

export default Services;
