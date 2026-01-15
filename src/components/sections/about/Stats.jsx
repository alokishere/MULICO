import React from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5k+", label: "Clients Success" },
  { value: "98%", label: "Visa Success" },
  { value: "24/7", label: "Expert Support" },
];

const Stats = () => {
  return (
    <section className="bg-(--color-primary) py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
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
