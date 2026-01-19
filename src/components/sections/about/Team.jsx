import React from "react";

const Team = () => {
  const teamMember = {
    name: "Mr. ANIL RAGHAV",
    role: "Founder & CEO",
    company: "Sarathi India IT Pvt. Ltd., Lucknow",
    location: "Lucknow, Uttar Pradesh, India",
    highlights: [
      "10+ years in IT services & digital transformation",
      "AI & Career Coach for B.Tech & MBA graduates",
      "500+ placed candidates",
      "DM for Free Resume Audit",
    ],
    shortBio:
      "Founder & CEO of Sarathi India IT Pvt. Ltd. in Lucknow. Passionate about bridging the gap between IT solutions and real-world business challenges through training, consulting, and career coaching. Helping students build job-ready skills and crack high-paying roles with practical mentorship.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFOTuH_GuHy_A/profile-displayphoto-crop_800_800/B56Zsxp6uhIYAM-/0/1766064633665?e=1770249600&v=beta&t=6L0PwOhdiLnkrLXypGTFbjqstogZA7wDiG3I6nLSAkE",
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-(--color-accent-teal) font-bold uppercase tracking-wider text-sm mb-2">
            Our Experts
          </p>
          <h2 className="text-3xl font-bold text-(--text-main)">
            Meet the People Behind Your Success
          </h2>
        </div>

        {/* Single Expert Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-(--color-primary) transition-colors duration-300 shadow-sm">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-(--text-main) mb-1">
                  {teamMember.name}
                </h3>
                <p className="text-(--text-muted) text-sm font-medium">
                  {teamMember.role}
                </p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="text-center lg:text-left">
              <p className="text-(--color-primary) font-semibold text-sm mb-2">
                {teamMember.company}
              </p>

              <p className="text-(--text-muted) text-sm mb-6">
                {teamMember.location}
              </p>

              <p className="text-(--text-main) font-medium leading-relaxed mb-6">
                {teamMember.shortBio}
              </p>

              <div className="rounded-2xl border border-black/5 bg-(--bg-light) p-5">
                <h4 className="text-(--text-main) font-bold mb-3">
                  Key Highlights
                </h4>

                <ul className="space-y-2">
                  {teamMember.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-(--color-primary) shrink-0" />
                      <p className="text-(--text-muted) text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
