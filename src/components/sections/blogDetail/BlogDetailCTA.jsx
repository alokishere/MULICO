import React from "react";
import Button from "../../ui/Button";
import GoToWhatsapp from "../../ui/GoToWhatsapp";

const BlogDetailCTA = () => {
  return (
    <div className="bg-[#2563eb] rounded-xl p-6 text-white text-center relative overflow-hidden group">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>

      <h4 className="font-bold text-lg mb-2 relative z-10">
        Need Personal Assistance?
      </h4>
      <p className="text-blue-100 text-sm mb-6 relative z-10">
        Our experts can guide you through the entire visa process. Book a slot
        today.
      </p>
      <GoToWhatsapp>
      <Button className="w-full bg-blue-900 text-white hover:bg-blue-700 border-none relative z-10">
        Book Consultation
      </Button>
      </GoToWhatsapp>
    </div>
  );
};

export default BlogDetailCTA;
