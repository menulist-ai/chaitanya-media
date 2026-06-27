"use client";

import {useEffect} from "react";
import Lenis from "lenis";

export function SmoothScrollProvider() {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotionQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: {
        offset: 0
      },
      autoRaf: true,
      duration: 1.05,
      stopInertiaOnNavigate: true
    });

    function handleReducedMotionChange(event: MediaQueryListEvent) {
      if (event.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      lenis.destroy();
    };
  }, []);

  return null;
}
