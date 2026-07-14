// src/components/sections/scroll-indicator.tsx
// ═══════════════════════════════════════════════════════════════
// SCROLL INDICATOR
// Animated scroll arrow at bottom of hero
// ═══════════════════════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  text?: string;
}

export function ScrollIndicator({
  className,
  text = "Scroll to Explore",
}: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2",
        "flex flex-col items-center gap-2",
        "text-white/70",
        className
      )}
    >
      <span className="text-xs uppercase tracking-[0.3em]">{text}</span>

      {/* Animated mouse-like indicator */}
      <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
        <motion.div
          className="h-2 w-1 rounded-full bg-white/70"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Chevron indicator */}
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </motion.div>
  );
}