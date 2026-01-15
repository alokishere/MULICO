import React from "react";

const Hero = () => {
  const filters = ["Student", "Work", "PR", "Tourist", "Business"];

  return (
    <section className="pt-32 pb-12 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-(--color-accent-teal) font-medium text-sm tracking-wider uppercase mb-3">
          Our Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-(--text-main) mb-6">
          Visa & Immigration Services
        </h1>
        <p className="text-(--text-muted) text-lg max-w-2xl mx-auto mb-10">
          From detailed consultations to application filing, we navigate the
          complex immigration landscape for you.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-6 py-2 rounded-full bg-(--color-primary) text-white text-sm font-medium shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
            All Services
          </button>
          {filters.map((filter, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-(--border-light) text-(--text-muted) bg-white text-sm font-medium hover:border-(--color-primary) hover:text-(--color-primary) transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
