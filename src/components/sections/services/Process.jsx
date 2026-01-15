import React from "react";
import { processSteps } from "../../../data/services";

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-(--color-accent-teal) font-bold text-sm tracking-wider uppercase mb-2">
            Our Process
          </p>
          <h2 className="text-3xl font-bold text-(--text-main)">
            Your Journey in 4 Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-(--color-primary) rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-(--text-main) mb-3">
                  {step.title}
                </h3>
                <p className="text-(--text-muted) text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
