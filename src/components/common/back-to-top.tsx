// src/components/common/back-to-top.tsx
// ═══════════════════════════════════════════════════════════════
// BACK TO TOP BUTTON
// Smooth scroll to top with progress indicator
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

export function BackToTop() {
  const { isScrolled, scrollY } = useScroll(500);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate scroll progress
  const scrollProgress = React.useMemo(() => {
    if (typeof window === "undefined") return 0;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min((scrollY / height) * 100, 100);
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-40",
            "h-14 w-14 rounded-full",
            "bg-gold-500 text-gold-950",
            "shadow-gold-lg hover:shadow-gold-xl",
            "transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          )}
          aria-label="Back to top"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="#3D2F03"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`}
              animate={{
                strokeDashoffset: 2 * Math.PI * 24 * (1 - scrollProgress / 100),
              }}
              transition={{ duration: 0.1 }}
            />
          </svg>

          {/* Arrow icon */}
          <ArrowUp className="h-6 w-6 mx-auto" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}