import React from "react";
import Button from "../../ui/Button";
import { detailedServices } from "../../../data/services";

const ServiceDetails = () => {
  return (
    <section className="py-20 bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {detailedServices.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
              service.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold tracking-wider uppercase mb-4">
                {service.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-(--text-main) mb-6">
                {service.title}
              </h2>
              <p className="text-(--text-muted) text-lg mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-(--text-main) font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-(--color-primary) shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button>Check Eligibility</Button>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient (Subtle) */}
                <div className="absolute inset-0 bg-linear-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;
