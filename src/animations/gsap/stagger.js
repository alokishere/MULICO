import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const staggerContainer = (container, childSelector, delay = 0) => {
  if (!container) return;

  const elements = container.querySelectorAll(childSelector);

  gsap.fromTo(
    elements,
    {
      autoAlpha: 0,
      y: 30,
    },
    {
      duration: 0.8,
      autoAlpha: 1,
      y: 0,
      delay: delay,
      stagger: 0.1, // Stagger interval
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
      },
    }
  );
};
