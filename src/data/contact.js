import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactInfo = [
  {
    id: "phone",
    title: "Call Us",
    lines: ["+1 (800) 123-4567", "+91 98765 43210"],
    subtext: "Available Mon-Fri, 9am-6pm",
    icon: Phone,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "email",
    title: "Email Support",
    lines: ["hello@mulico.com", "support@mulico.com"],
    subtext: "24/7 Response time",
    icon: Mail,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "office",
    title: "Visit Office",
    lines: ["123 Business Bay, Tower A", "Dubai, UAE"],
    subtext: "Get directions",
    icon: MapPin,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export const visaTypes = [
  "Student Visa",
  "Skilled Worker Visa",
  "Tourist/Visitor Visa",
  "Business Visa",
  "Family Sponsorship",
  "Permanent Residency",
];
