import logo from "../../assets/logo.avif";
const Footer = () => {
  const services = [
    {
      id: 1,
      label: "Visa Consultancy",
      href: `https://wa.me/+919580908191?text=${encodeURIComponent(
        "Hello, I need help with my visa application."
      )}`
    },
    {
      id: 2,
      label: "Flight Booking",
      href: `https://wa.me/+919580908191?text=${encodeURIComponent(
        "Hello, I need help with my flight booking."
      )}`,
    },
    {
      id: 3,
      label: "Hotel Reservations",
      href: `https://wa.me/+919580908191?text=${encodeURIComponent(
        "Hello, I need help with my hotel reservation."
      )}`,
    },
    {
      id: 4,
      label: "Travel Insurance",
      href: `https://wa.me/+919580908191?text=${encodeURIComponent(
        "Hello, I need help with my travel insurance."
      )}`,
    },
  ];
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-(--border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-28 h-28 rounded-lg bg-(--color-primary)] flex items-center justify-center text-white font-bold text-xl">
                <a href="/">
                  {" "}
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <p className="text-(--text-muted) text-sm leading-relaxed mb-6">
              Trusted global visa consultancy partner making travel accessible
              for everyone.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-(--text-main) mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-(--text-muted)">
              <li>
                <a
                  href="/about"
                  className="hover:text-(--color-primary) transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-(--color-primary) transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-(--color-primary) transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-(--color-primary) transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-(--text-main)] mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-(--text-muted)">
              {services.map((service) => (
                <li key={service.id}
                  className="hover:text-(--color-primary) transition-colors"
                >
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-(--color-primary) transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-(--text-main) mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-(--text-muted)">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                2nd Floor, JSV Hyundai Building CP-53 Sitapur Road Yojna,
                <br /> Near Engineering College Chauraha, <br />
                Lucknow Uttar Pradesh India
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 8874739688
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                mulicovisaservices@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-(--border-light)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--text-muted)]">
          <p>&copy; 2026 Mulico Tour & Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-(--text-main)]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-(--text-main)]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
