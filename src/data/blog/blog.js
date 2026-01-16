export const categories = [
  { id: "all", label: "All Posts" },
  { id: "student", label: "Student Visa" },
  { id: "work", label: "Work Visa" },
  { id: "tourist", label: "Tourist" },
  { id: "updates", label: "Updates" },
];

export const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to UK Student Visa Requirements 2024",
    excerpt:
      "Everything you need to know about the new point-based system, CAS numbers, and financial proof requirements for studying in the UK.",
    category: "Student Visa",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    slug: "uk-student-visa-guide",
    author: {
      name: "Sarah Jenkins",
      role: "Senior Education Consultant",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    content: [
      {
        type: "p",
        text: "Studying in the UK is a dream for many international students. With its world-class universities and vibrant culture, it's no surprise that thousands of students flock to the UK every year. However, navigating the student visa process can be daunting. This guide breaks down everything you need to know about the UK Student Visa (formerly Tier 4) requirements for 2024.",
      },
      {
        type: "h2",
        text: "Understanding the Points-Based System",
        id: "points-system",
      },
      {
        type: "p",
        text: "The UK uses a points-based immigration system. To be eligible for a Student Visa, you need to score a total of 70 points. These points are awarded for:",
      },
      {
        type: "ul",
        items: [
          "Confirmation of Acceptance for Studies (CAS): 50 points",
          "Financial Requirement: 10 points",
          "English Language Proficiency: 10 points",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Key Tip",
        text: "Always ensure your CAS statement matches your application details perfectly to avoid rejection.",
      },
      {
        type: "h2",
        text: "Financial Requirements Explained",
        id: "financial-req",
      },
      {
        type: "p",
        text: "You must prove that you have enough money to pay for your course and support yourself in the UK. The amount you need depends on where you will be studying.",
      },
      {
        type: "p",
        text: "If you study in London, you need £1,334 per month (for up to 9 months). Outside London, the requirement is £1,023 per month.",
      },
      { type: "h2", text: "English Language Proficiency", id: "english-lang" },
      {
        type: "p",
        text: "Most students will need to pass a Secure English Language Test (SELT). Common tests include IELTS for UKVI and PTE Academic UKVI. Ensure you take the 'UKVI' version of the test, as standard versions are often not accepted.",
      },
    ],
  },
  {
    id: 2,
    title: "Canada Express Entry: How to Improve Your CRS Score",
    excerpt:
      "Expert tips on boosting your Comprehensive Ranking System score through language tests, education assessments, and provincial nominations.",
    category: "Work Visa",
    date: "Oct 10, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?auto=format&fit=crop&q=80&w=800",
    slug: "canada-crs-score-tips",
    author: {
      name: "David Chen",
      role: "Immigration Lawyer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    content: [
      {
        type: "p",
        text: "The Comprehensive Ranking System (CRS) is the points system used by Immigration, Refugees and Citizenship Canada (IRCC) to assess your profile for Express Entry. A higher score increases your chances of receiving an Invitation to Apply (ITA) for permanent residence.",
      },
      { type: "h2", text: "Retake Your Language Test", id: "language-test" },
      {
        type: "p",
        text: "Language proficiency is one of the most flexible factors to improve. Even a small increase in your CLB (Canadian Language Benchmark) score can have a significant impact on your overall CRS points.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Did you know?",
        text: "Reaching CLB 9 creates a 'magic jump' in points due to skill transferability factors.",
      },
      { type: "h2", text: "Provincial Nominee Programs (PNP)", id: "pnp" },
      {
        type: "p",
        text: "Obtaining a provincial nomination is the single most effective way to boost your score, awarding you an additional 600 points. This effectively guarantees an ITA in the next draw.",
      },
    ],
  },
  {
    id: 3,
    title: "Schengen Visa Fee Update: What Travelers Need to Know",
    excerpt:
      "The European Union has announced revised visa fees for short-stay visas effective next month. Check the new rates here.",
    category: "Updates",
    date: "Oct 08, 2024",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800",
    slug: "schengen-visa-fee-update",
    author: {
      name: "Elena Rossi",
      role: "Travel Consultant",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    content: [
      {
        type: "p",
        text: "The European Commission has announced a fee increase for Schengen visas worldwide. This change comes as a result of an inflationary review that takes place every three years.",
      },
      { type: "h2", text: "New Fee Structure", id: "new-fees" },
      {
        type: "ul",
        items: [
          "Adults: €90 (previously €80)",
          "Children (6-12 years): €45 (previously €40)",
          "Children under 6: Free",
        ],
      },
      {
        type: "p",
        text: "The new fees will be effective from next month. Travelers planning their European summer vacations should apply early to avoid potential processing delays alongside the new costs.",
      },
    ],
  },
  // ... other posts can keep defaults or be filled similarly if needed, sticking to these 3 for detailed view mostly
  {
    id: 4,
    title: "Moving to Australia with Family: A Step-by-Step Guide",
    excerpt:
      "Navigating the complexities of family migration visas for Australia. Dependent visas, healthcare, and schooling explained.",
    category: "Immigration",
    date: "Oct 05, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1523482580672-01e6f086552c?auto=format&fit=crop&q=80&w=800",
    slug: "australia-family-migration",
    author: {
      name: "Team Mulico",
      role: "Editor",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: [],
  },
  {
    id: 5,
    title: "US B1/B2 Visa Interview Questions De-coded",
    excerpt:
      "Prepare for your US visitor visa interview with these common questions and tips on how to answer them confidently.",
    category: "Tourist",
    date: "Sep 28, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=800",
    slug: "us-visa-interview-questions",
    author: {
      name: "Team Mulico",
      role: "Editor",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: [],
  },
  {
    id: 6,
    title: "New Digital Nomad Visas Launched in 2024",
    excerpt:
      "Several countries including Japan and South Korea have launched new visas for remote workers. Find out if you are eligible.",
    category: "Updates",
    date: "Sep 25, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    slug: "digital-nomad-visas-2024",
    author: {
      name: "Team Mulico",
      role: "Editor",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    content: [],
  },
];

export const popularPosts = [
  {
    id: 101,
    title: "Top 5 Universities in UK for Masters",
    date: "Oct 1, 2024",
    image:
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 102,
    title: "Germany Job Seeker Visa Checklist",
    date: "Sep 15, 2024",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 103,
    title: "Dubai Golden Visa: Are You Eligible?",
    date: "Aug 20, 2024",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea904ac6666?auto=format&fit=crop&q=80&w=200",
  },
];
