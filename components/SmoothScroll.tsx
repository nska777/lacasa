"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (x: number) => 1 - Math.pow(1 - x, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
      // ❌ smoothTouch УБРАН — в типах его нет
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
