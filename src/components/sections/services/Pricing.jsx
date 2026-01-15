import React from "react";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { pricingPlans } from "../../../data/services";

const Pricing = () => {
  return (
    <section className="py-20 bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-(--color-accent-teal) font-bold text-sm tracking-wider uppercase mb-2">
            Consultation Fees
          </p>
          <h2 className="text-3xl font-bold text-(--text-main)">
            Transparent Pricing
          </h2>
          <p className="text-(--text-muted) mt-4">
            Choose the plan that fits your visa requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 flex flex-col items-center text-center ${
                plan.highlight
                  ? "border-(--color-primary) shadow-xl scale-105 z-10"
                  : "border-transparent"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--color-primary) text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-(--text-main) mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-(--color-primary) mb-2">
                {plan.price}
              </div>
              <p className="text-(--text-muted) text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-4 mb-8 w-full text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-(--text-main)"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0"
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

              <Button
                variant={plan.buttonVariant || "outline"}
                className="w-full mt-auto"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
