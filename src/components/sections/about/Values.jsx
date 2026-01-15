import React from "react";
import Card from "../../ui/Card";

const values = [
  {
    title: "Certified Experts",
    desc: "Our team consists of licensed immigration lawyers and seasoned consultants.",
    iconClass: "bg-blue-50 text-blue-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Global Network",
    desc: "With offices in 12 countries, we have local insights and global reach.",
    iconClass: "bg-indigo-50 text-indigo-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Track",
    desc: "We prioritize time-sensitive applications without compromising accuracy.",
    iconClass: "bg-cyan-50 text-cyan-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Process",
    desc: "Your data is encrypted and handled with the utmost confidentiality.",
    iconClass: "bg-teal-50 text-teal-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-(--color-accent-teal) font-bold uppercase tracking-wider text-sm mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold text-(--text-main)">
            Trust is Earned, Not Given
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <Card key={index} className="flex flex-col items-start p-8">
              <div
                className={`w-12 h-12 rounded-lg ${item.iconClass} flex items-center justify-center mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-(--text-main) mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-(--text-muted) leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
