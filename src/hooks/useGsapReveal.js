import { useEffect, useRef } from "react";
import { reveal, revealBlur } from "../animations/gsap/reveal";

export const useGsapReveal = (variant = "fade", delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (variant === "blur") {
        revealBlur(ref.current, delay);
      } else {
        reveal(ref.current, delay);
      }
    }
  }, [variant, delay]);

  return ref;
};
