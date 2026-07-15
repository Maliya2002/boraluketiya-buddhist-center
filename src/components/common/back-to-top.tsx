// src/components/common/back-to-top.tsx
// ═══════════════════════════════════════════════════════════════
// BACK TO TOP - CSS only, no Framer Motion
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

export function BackToTop() {
  const { isScrolled, scrollY } = useScroll(500);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollProgress = React.useMemo(() => {
    if (typeof window === "undefined") return 0;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min((scrollY / height) * 100, 100);
  }, [scrollY]);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40",
        "h-14 w-14 rounded-full",
        "bg-gold-500 text-gold-950",
        "shadow-gold-lg hover:shadow-gold-xl",
        "hover:scale-110 active:scale-95",
        "transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
        isScrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
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
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="#3D2F03"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 24}`}
          strokeDashoffset={2 * Math.PI * 24 * (1 - scrollProgress / 100)}
          style={{ transition: "stroke-dashoffset 0.1s ease" }}
        />
      </svg>

      <ArrowUp className="h-6 w-6 mx-auto" strokeWidth={2.5} />
    </button>
  );
}