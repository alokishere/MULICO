import React from "react";
import Card from "../../ui/Card";
import { serviceCategories } from "../../../data/services";

const ServiceGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service) => (
            <Card
              key={service.id}
              className="p-8 hover:border-(--color-primary) group transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.bgColor} ${service.iconColor} flex items-center justify-center mb-6`}
              >
                {/* Placeholder Icons based on ID - Logic can be dynamic or static svg */}
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
              </div>
              <h3 className="text-xl font-bold text-(--text-main) mb-3 group-hover:text-(--color-primary) transition-colors">
                {service.title}
              </h3>
              <p className="text-(--text-muted) text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <span className="text-(--color-primary) text-sm font-medium flex items-center gap-1 cursor-pointer">
                View Details
                <svg
                  className="w-4 h-4"
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
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
