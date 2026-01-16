import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reveal = (element, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      autoAlpha: 0,
      y: 30, // Subtle move up
    },
    {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // Trigger when top of element hits 85% of viewport height
        toggleActions: "play none none reverse", // Play on enter, reverse on leave back up (or 'play none none none' for once)
      },
    }
  );
};

export const revealBlur = (element, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      autoAlpha: 0,
      y: 30,
      filter: "blur(10px)",
    },
    {
      duration: 1.2,
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    }
  );
};
