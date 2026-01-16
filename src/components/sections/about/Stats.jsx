import React, { useEffect, useRef } from "react";
import { animateCount } from "../../../animations/gsap/counters";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5k+", label: "Clients Success" },
  { value: "98%", label: "Visa Success" },
  { value: "24/7", label: "Expert Support" },
];

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".stat-counter");
      elements.forEach((el) => {
        const target = el.getAttribute("data-target");
        animateCount(el, target);
      });
    }
  }, []);

  return (
    <section className="bg-(--color-primary) py-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="stat-counter text-4xl lg:text-5xl font-bold text-white mb-2"
                data-target={stat.value}
              >
                0
              </span>
              <span className="text-blue-100 text-sm lg:text-base font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
