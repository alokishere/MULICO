import React, { useState } from "react";
import { faqs } from "../../../data/faqs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-(--text-main) mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-(--border-light) rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "shadow-lg bg-white ring-1 ring-blue-100"
                  : "bg-white"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span
                  className={`font-medium ${
                    openIndex === index
                      ? "text-(--color-primary)"
                      : "text-(--text-main)"
                  }`}
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
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-(--text-muted) text-sm leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="font-medium text-(--color-primary) hover:underline"
          >
            More FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
