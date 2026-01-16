import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateCount = (element, endValue, duration = 2) => {
  if (!element) return;

  // Ensure endValue is a number. Remove non-numeric chars if string (like "99%")
  const numericValue = parseFloat(String(endValue).replace(/[^0-9.]/g, ""));
  const suffix = String(endValue).replace(/[0-9.]/g, "");

  const obj = { value: 0 };

  gsap.to(obj, {
    value: numericValue,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true, // Count only once
    },
    onUpdate: () => {
      // Format number nicely (e.g. no decimals if integer target)
      const isFloat = numericValue % 1 !== 0;
      element.textContent = isFloat
        ? obj.value.toFixed(1) + suffix
        : Math.round(obj.value) + suffix;
    },
  });
};
