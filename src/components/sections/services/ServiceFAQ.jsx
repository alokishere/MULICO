import React, { useState } from "react";
import { serviceFaqs } from "../../../data/services";

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-(--text-main) mb-12">
          Common Questions
        </h2>

        <div className="space-y-4">
          {serviceFaqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-(--border-light) transition-colors ${
                openIndex === index ? "pb-6" : "pb-4"
              }`}
            >
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span
                  className={`font-medium text-lg ${
                    openIndex === index
                      ? "text-(--color-primary)"
                      : "text-(--text-main) group-hover:text-(--color-primary)"
                  } transition-colors`}
                >
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-(--color-primary)"
                      : "text-gray-400"
                  }`}
                >
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2 text-(--text-muted) leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
