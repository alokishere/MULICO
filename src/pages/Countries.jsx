import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowUpRight, Download, ChevronDown } from "lucide-react";
import { countries, countryCategories } from "../data/countries";
import { staggerContainer } from "../animations/gsap/stagger";

const Countries = () => {
  useEffect(() => {
    document.title = "Countries We Serve | Mulico Tour & Travels";
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef(null);

  // Re-run stagger animation when category changes or filtered list changes
  useEffect(() => {
    // Small timeout to allow DOM to update
    const timer = setTimeout(() => {
      if (gridRef.current) {
        staggerContainer(gridRef.current, ".country-card", 0.1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  const filteredCountries = countries.filter((country) => {
    const matchesCategory =
      activeCategory === "All" || country.regions.includes(activeCategory);
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-(--bg-light)">
      {/* Header Section */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-primary) tracking-tight">
          Countries We Serve
        </h1>
        <p className="text-lg text-(--text-muted) max-w-2xl mx-auto">
          Explore requirements, processing times, and visa types for the world's
          most popular destinations.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-white p-2 rounded-full shadow-lg flex items-center border border-(--border-light)">
            <div className="pl-4 text-(--text-muted)">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search by country name..."
              className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-(--text-main) placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="hidden md:flex items-center px-4 border-l border-gray-200">
              <span className="text-sm font-medium text-(--text-main) mr-2">
                All Visa Types
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="bg-(--color-primary) text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {countryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                activeCategory === category
                  ? "bg-(--color-primary) text-white border-(--color-primary)"
                  : "bg-white text-(--text-muted) border-(--border-light) hover:border-(--color-primary) hover:text-(--color-primary)"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Countries Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]"
        >
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="country-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-(--border-light) flex flex-col opacity-0" // Start opacity 0 for GSAP
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="250"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-(--text-main)">
                    {country.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-(--text-muted) group-hover:text-(--color-primary) transition-colors" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {country.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="mt-auto w-full py-2.5 rounded-xl border border-gray-200 text-(--color-primary) font-medium text-sm hover:bg-(--color-primary) hover:text-white hover:border-(--color-primary) transition-all duration-300 cursor-pointer">
                  View Requirements
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-(--color-primary) py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Need a document checklist?
              </h2>
              <p className="text-blue-100">
                Select your country and get the full PDF list instantly.
              </p>
            </div>
          </div>
          <button className="bg-white text-(--color-primary) px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg cursor-pointer">
            Download Checklist
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countries;
