import React, { useState, useEffect } from "react";
import { Send, CheckCircle, ExternalLink } from "lucide-react";
import { contactInfo, visaTypes } from "../data/contact";
import { countries } from "../data/countries";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Mulico Tour & Travels";
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    visaType: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        country: "",
        visaType: "",
        message: "",
        agree: false,
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-(--bg-light)">
      {/* Header Section */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-primary) tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg text-(--text-muted) max-w-2xl mx-auto">
          Fast, reliable & transparent visa support. Our team is here to answer
          your questions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-(--border-light) flex items-start gap-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-(--text-main) mb-1">
                      {item.title}
                    </h3>
                    <div className="text-(--text-muted) mb-2">
                      {item.lines.map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                    <span className={`text-sm font-medium ${item.color}`}>
                      {item.subtext}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                alt="Map Location"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-(--text-main) flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-emerald-800 font-medium text-sm">
                We typically respond within 24 hours
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-(--border-light)">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-(--color-primary) mb-2">
                Send us a message
              </h2>
              <p className="text-(--text-muted)">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-(--text-main) mb-2">
                  Message Sent!
                </h3>
                <p className="text-(--text-muted) max-w-xs">
                  Thank you for contacting us. We will get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-(--color-primary) font-medium hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-(--text-main)"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-(--text-main)"
                    >
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-(--text-main)"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  {/* Country */}
                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium text-(--text-main)"
                    >
                      Country of Interest
                    </label>
                    <div className="relative">
                      <select
                        required
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visa Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="visaType"
                    className="text-sm font-medium text-(--text-main)"
                  >
                    Visa Type
                  </label>
                  <div className="relative">
                    <select
                      required
                      id="visaType"
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select Visa Type</option>
                      {visaTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-(--text-main)"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your visa requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-(--color-primary) focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-(--color-primary) focus:ring-(--color-primary) cursor-pointer"
                  />
                  <label
                    htmlFor="agree"
                    className="text-sm text-gray-500 cursor-pointer"
                  >
                    I agree to the privacy policy and authorize Mulico to
                    contact me regarding my inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-(--color-primary) text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 shadow-lg shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Clock Icon component since it wasn't imported from lucide-react in the data file but used in the component
function Clock({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default Contact;
