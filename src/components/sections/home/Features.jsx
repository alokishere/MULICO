import React, { useEffect, useRef } from "react";
import Card from "../../ui/Card";
import { staggerContainer } from "../../../animations/gsap/stagger";

const features = [
  {
    title: "Visa Consultancy",
    desc: "Expert assistance for tourist, student, and work visas. We handle the documentation so you don't have to.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "bg-blue-50",
  },
  {
    title: "Flight Booking",
    desc: "Get the best deals on international and domestic flights. We partner with top airlines for premium comfort.",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    color: "bg-emerald-50",
  },
  {
    title: "Student Support",
    desc: "From university selection to visa approval, we guide students towards their educational dreams abroad.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    color: "bg-orange-50",
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    staggerContainer(containerRef.current, ".feature-card", 0.3);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-(--text-main) mb-4">
            Tailored Travel Solutions
          </h2>
          <p className="text-(--text-muted)">
            We provide end-to-end travel assistance so you can explore the world
            without the paperwork headaches.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card flex flex-col items-start p-8 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-(--text-main) mb-3">
                {feature.title}
              </h3>
              <p className="text-(--text-muted) text-sm leading-relaxed mb-6 grow">
                {feature.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-(--color-primary) font-medium text-sm hover:underline"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
