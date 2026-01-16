import React from "react";
import Card from "../../ui/Card";
import { testimonials } from "../../../data/testimonies";

const Testimonials = () => {
  return (
    <section className="py-20 bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-(--color-accent-teal) font-bold uppercase tracking-wider text-sm mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-(--text-main)">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Buttons (Visual only for now) */}
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-(--border-light) flex items-center justify-center text-(--text-muted) hover:bg-white hover:shadow-md">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="p-8">
              <p className="text-(--text-muted) mb-8 leading-relaxed italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-(--text-main) font-bold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-(--text-muted) text-xs">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
