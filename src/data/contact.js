import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactInfo = [
  {
    id: "phone",
    title: "Call Us",
    lines: ["+91 8874739688"],
    subtext: "Available Mon-Fri, 9am-6pm",
    icon: Phone,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "email",
    title: "Email Support",
    lines: ["mulicovisaservices.com", "support@mulico.com"],
    subtext: "24/7 Response time",
    icon: Mail,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "office",
    title: "Visit Office",
    lines: ["2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021"],
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
