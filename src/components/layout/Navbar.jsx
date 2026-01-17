import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Countries", path: "/countries" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-white/80 shadow-md py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative overflow-hidden">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-(--color-primary) font-semibold"
                      : "text-(--text-muted) hover:text-(--color-primary)"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-(--color-primary) transform origin-left transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href={`https://wa.me/+919580908191?text=${encodeURIComponent("Hello, I need help with my visa application.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-2 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors border border-green-100">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider leading-none">Chat with us</span>
                <span className="text-sm font-semibold text-(--text-main)">WhatsApp</span>
              </div>
            </a>

            <a
              href="tel:+919580908191"
              className="flex items-center gap-3 bg-(--color-primary) text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <div className="p-2 bg-white/20 rounded-full">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-none">Call Now</span>
                <span className="text-sm font-bold">+91 95809 08191</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`https://wa.me/+919580908191?text=${encodeURIComponent("Hello, I need help with my visa application.")}`}
              className="text-green-500"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-(--text-main) hover:bg-white/20 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white/90 backdrop-blur-lg border-b border-(--border-light) shadow-xl space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-(--color-primary)"
                    : "text-(--text-muted) hover:bg-gray-50 hover:text-(--color-primary)"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-2 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-(--color-primary) text-white px-6 py-3 rounded-xl font-semibold active:opacity-90">
              <Phone className="w-5 h-5" />
              <span>Call now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
