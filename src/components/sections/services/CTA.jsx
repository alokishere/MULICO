import React from "react";
import Button from "../../ui/Button";

const CTA = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom_right,#3b82f6,#2563eb)] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unsure which visa you need?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Answer a few questions about your travel plans and we'll recommend the
          right visa options for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-(--text-main) hover:bg-blue-50 border-none">
            Free Assessment
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
