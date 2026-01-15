import React from "react";
import Button from "../../ui/Button";

const CTA = () => {
  return (
    <section className="bg-[linear-gradient(to_right,#2563eb,#1d4ed8)] py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Book a free consultation today. We process visas in 2 weeks on average
          for qualified applicants.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl px-10 py-4 text-lg">
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default CTA;
