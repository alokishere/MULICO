import React from "react";
import Button from "../../ui/Button";
import { useGsapReveal } from "../../../hooks/useGsapReveal";

const Hero = () => {
  const textRef = useGsapReveal("fade", 0.2); // Delay of 0.2s
  const imageRef = useGsapReveal("blur", 0.4); // Delay of 0.4s

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 opacity-0" // Start with opacity-0
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-(--color-accent-teal) text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-(--color-accent-teal) mr-2"></span>
              Trusted by 10,000+ Travelers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-(--text-main) mb-6">
              Your Gateway to <br className="hidden lg:block" />
              <span className="text-(--color-primary)">Global Dreams</span>
            </h1>

            <p className="text-lg text-(--text-muted) mb-8 leading-relaxed">
              Professional visa consultancy for tourists, students, and
              businesses. We simplify complex immigration processes so you can
              focus on your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>
                Start Your Application
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button variant="secondary" className="gap-2">
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                How it Works
              </Button>
            </div>

            {/* Stats Row within Hero (Mobile) or below text */}
            <div className="mt-12 pt-8 border-t border-(--border-light) grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-(--text-main)">99%</div>
                <div className="text-sm text-(--text-muted)">Visa Success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-(--text-main)">50+</div>
                <div className="text-sm text-(--text-muted)">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-(--text-main)">12+</div>
                <div className="text-sm text-(--text-muted)">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            ref={imageRef}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200 opacity-0" // Start with opacity-0
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-gradient-to-t from-black/20 to-transparent z-10"></div>

            {/* Placeholder for the travel image */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
                alt="Travel"
                className="w-full h-full object-cover"
                loading="eager" // Hero image should be eager
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-(--text-main)">
                    Visa Approved
                  </p>
                  <p className="text-xs text-(--text-muted)">
                    Just now for Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
