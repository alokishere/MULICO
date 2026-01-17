export const serviceCategories = [
  {
    id: "student",
    title: "Student Visas",
    desc: "Study at top universities in Canada, UK, USA, and Australia.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "work",
    title: "Skilled Worker",
    desc: "Secure your future with work permits and PR pathways.",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "tourist",
    title: "Tourist & Visit",
    desc: "Explore the world with hassle-free visitor visa assistance.",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "family",
    title: "Family Sponsor",
    desc: "Bring your loved ones closer with family reunification visas.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "business",
    title: "Business & Investor",
    desc: "Expand your business globally with our investor visa solutions.",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: "pr",
    title: "Permanent Resident",
    desc: "Step-by-step guidance for PR applications and settlements.",
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
];

export const detailedServices = [
  {
    id: "student-details",
    tag: "STUDENT VISAS",
    title: "Student Visas & Admissions",
    description:
      "Achieve your academic dreams with our comprehensive student visa services. We assist with university selection, application processes, and visa documentation.",
    features: [
      "University shortlisting & counseling",
      "SOP & LOR writing assistance",
      "Financial documentation support",
      "Pre-departure briefing",
    ],
    image:
      "https://images.unsplash.com/photo-1678340458877-ea3d3ddd6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Indian student context
    reverse: false,
  },
  {
    id: "work-details",
    tag: "WORK PERMITS",
    title: "Skilled Worker Solutions",
    description:
      "Our expert team helps skilled professionals navigate the complex work visa requirements for major global economies.",
    features: [
      "Profile assessment & eligibility check",
      "Document verification & filing",
      "Employer sponsorship guidance",
      "Post-landing support",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", // Professional context
    reverse: true,
  },
  {
    id: "tourist-details",
    tag: "TOURIST VISAS",
    title: "Tourist & Visitor Visas",
    description:
      "Planning a vacation or family visit? We make obtaining a tourist visa simple and stress-free.",
    features: [
      "Quick itinerary planning",
      "Cover letter drafting",
      "Travel insurance assistance",
      "Mock interview preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800", // Travel context (Taj Mahal or similar iconic/Indian travelers)
    reverse: false,
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Free Assessment",
    desc: "Fill out our form to get a preliminary eligibility check.",
  },
  {
    step: 2,
    title: "Document Collection",
    desc: "We help you gather and verify all necessary documents.",
  },
  {
    step: 3,
    title: "Visa Filing",
    desc: "Our experts submit your application with precision.",
  },
  {
    step: 4,
    title: "Visa Approval",
    desc: "Receive your visa and prepare for your journey.",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$199",
    desc: "For Tourist Visas",
    features: [
      "Document Checklist",
      "Form Filling",
      "Cover Letter",
      "Email Support",
    ],
    highlight: false,
    buttonVariant: "outline",
  },
  {
    name: "Standard",
    price: "$499",
    desc: "For Student Visas",
    features: [
      "University Selection",
      "SOP Assistance",
      "Visa Filing",
      "Interview Prep",
      "Priority Support",
    ],
    highlight: true,
    buttonVariant: "primary",
  },
  {
    name: "Premium",
    price: "$899",
    desc: "For Work/Business Visas",
    features: [
      "Profile Evaluation",
      "Employer Coordination",
      "Legal Review",
      "Concierge Service",
      "24/7 Dedicated Manager",
    ],
    highlight: false,
    buttonVariant: "outline",
  },
];

export const serviceFaqs = [
  {
    question: "What items count as proof of funds?",
    answer:
      "Acceptable proof includes bank statements (past 6 months), fixed deposits, education loan sanction letters, and income tax returns of sponsors.",
  },
  {
    question: "Can I bring my dependents?",
    answer:
      "Yes, certain visa categories like Skilled Worker and Student (Post-Grad) allow you to bring your spouse and children. We can assist with their applications too.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "We have partnerships with leading insurance providers to offer you comprehensive travel and medical insurance plans suitable for visa requirements.",
  },
  {
    question: "How do I track my application?",
    answer:
      "Once we file your application, we provide you with a tracking portal access where you can see real-time updates and status changes.",
  },
];
