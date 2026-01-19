import React from "react";
import Button from "../../ui/Button";
import GoToWhatsapp from "../../ui/GoToWhatsapp";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-(--bg-light) overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-block text-(--color-primary) font-medium text-sm mb-4 hero-fade-in">
              Home &gt; About Us
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-(--text-main) mb-6 leading-tight hero-slide-up">
              Your Gateway to <br />
              <span className="text-(--color-primary)">
                Global Opportunities
              </span>
            </h1>

            <p className="text-(--text-muted) text-lg mb-8 leading-relaxed hero-fade-in hero-delay-2">
              Established with a vision to make global travel accessible, we
              simplify complex immigration processes so you can focus on your
              journey. We are your partners in crossing borders.
            </p>

            <div className="hero-delay-3 hero-slide-up">
              <GoToWhatsapp message="Hello, I need help with my visa application.">
                <Button className="hero-btn-hover">Start Your Journey</Button>
              </GoToWhatsapp>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative w-full max-w-lg lg:max-w-none lg:flex-1 hero-collage">
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl hero-img hero-float-1">
                <img
                  src="https://images.pexels.com/photos/7580824/pexels-photo-7580824.jpeg"
                  alt="Modern Office"
                  className="w-full h-full object-cover hero-img-inner"
                />
              </div>

              {/* Floating Circle Image */}
              <div className="absolute top-10 left-0 lg:left-8 w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden z-20 hero-img hero-float-2">
                <img
                  src="https://images.pexels.com/photos/7580850/pexels-photo-7580850.jpeg"
                  alt="Team Member"
                  className="w-full h-full object-cover hero-img-inner"
                />
              </div>

              {/* Bottom Floating Card Image */}
              <div className="absolute bottom-4 left-4 lg:left-0 w-2/3 h-48 rounded-2xl border-4 border-white shadow-xl overflow-hidden z-20 hero-img hero-float-3">
                <img
                  src="https://images.pexels.com/photos/7581131/pexels-photo-7581131.jpeg"
                  alt="Visa Application"
                  className="w-full h-full object-cover hero-img-inner"
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
