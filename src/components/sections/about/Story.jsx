import React from "react";

const icons = {
  transparency: (
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  trust: (
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
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  support: (
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
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
};

const Story = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-(--color-accent-teal) font-bold uppercase tracking-wider mb-2 text-sm">
              Our Story
            </h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--text-main) mb-6">
              Building Bridges Across Borders Since 2016
            </h2>
            <p className="text-(--text-muted) mb-8 leading-relaxed">
              Mulico started with a simple belief: that global travel should be
              accessible to everyone. From a small office in Dubai to a global
              presence, we have helped thousands of students, professionals, and
              families realize their international dreams.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  {icons.transparency}
                </div>
                <div>
                  <h4 className="font-bold text-(--text-main) text-lg">
                    Transparency
                  </h4>
                  <p className="text-sm text-(--text-muted)">
                    Real-time tracking and clear communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  {icons.trust}
                </div>
                <div>
                  <h4 className="font-bold text-(--text-main) text-lg">
                    Trust
                  </h4>
                  <p className="text-sm text-(--text-muted)">
                    Licensed consultants and secure processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  {icons.support}
                </div>
                <div>
                  <h4 className="font-bold text-(--text-main) text-lg">
                    Support
                  </h4>
                  <p className="text-sm text-(--text-muted)">
                    We are with you until you land safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 w-full h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                alt="Meeting"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* CEO Card Badge */}
            <div className="absolute bottom-8 left-8 lg:-left-8 z-20 bg-white p-4 rounded-xl shadow-lg border border-(--border-light) max-w-xs flex gap-4 items-center">
              <img
                src="https://images.pexels.com/photos/30324827/pexels-photo-30324827.jpeg"
                alt="CEO"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-xs italic text-(--text-muted) mb-1">
                  "We don't just process visas; we fulfill dreams."
                </p>
                <p className="text-sm font-bold text-(--text-main)">
                  Aman Kumar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
