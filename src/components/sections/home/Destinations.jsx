import React from "react";

const destinations = [
  {
    name: "Canada",
    type: "Work & Study Visas",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "United Kingdom",
    type: "Tourist & Visit Visas",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Schengen",
    type: "Europe Travel",
    image:
      "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "USA",
    type: "Business & Tourist",
    image:
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=600",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-(--bg-light)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-(--text-main) mb-4">
              Popular Destinations
            </h2>
            <p className="text-(--text-muted)">
              Explore the most sought-after countries for our clients.
            </p>
          </div>
          <button className="px-6 py-2 rounded-full border border-(--border-light) bg-white text-sm font-medium hover:bg-gray-50 transition-colors">
            View All Countries
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                  {dest.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
