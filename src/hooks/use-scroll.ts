// src/hooks/use-scroll.ts
// ═══════════════════════════════════════════════════════════════
// USE SCROLL HOOK
// Track scroll position for scroll-based effects
// ═══════════════════════════════════════════════════════════════

"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolled: boolean;
  isAtTop: boolean;
}

/**
 * Hook to track scroll position and direction
 * @param threshold - Pixels scrolled before isScrolled becomes true (default: 50)
 */
export function useScroll(threshold: number = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
        isAtTop: currentScrollY < 10,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        // Use requestAnimationFrame for performance
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial call
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return scrollState;
}