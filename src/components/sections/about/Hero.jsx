import React from "react";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-(--bg-light) overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-block text-(--color-primary) font-medium text-sm mb-4">
              Home &gt; About Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-(--text-main) mb-6 leading-tight">
              Your Gateway to <br />
              <span className="text-(--color-primary)">
                Global Opportunities
              </span>
            </h1>
            <p className="text-(--text-muted) text-lg mb-8 leading-relaxed">
              Established with a vision to make global travel accessible, we
              simplify complex immigration processes so you can focus on your
              journey. We are your partners in crossing borders.
            </p>
            <Button>Start Your Journey</Button>
          </div>

          {/* Image Collage */}
          <div className="relative w-full max-w-lg lg:max-w-none lg:flex-1">
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Circle Image */}
              <div className="absolute top-10 left-0 lg:left-8 w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Floating Card Image */}
              <div className="absolute bottom-4 left-4 lg:left-0 w-2/3 h-48 rounded-2xl border-4 border-white shadow-xl overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
                  alt="Visa Application"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
