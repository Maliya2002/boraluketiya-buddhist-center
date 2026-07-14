// src/components/animations/text-reveal.tsx
// ═══════════════════════════════════════════════════════════════
// TEXT REVEAL ANIMATION
// Split text into letters and animate each one
// Creates cinematic text reveal effect
// ═══════════════════════════════════════════════════════════════

"use client";

import { motion, type Variants, cubicBezier } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "letter" | "word";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.8,
  splitBy = "word",
}: TextRevealProps) {
  const easing = cubicBezier(0.76, 0, 0.24, 1);

  // Split text into words or letters
  const items = splitBy === "letter" ? text.split("") : text.split(" ");

  // Container variant (orchestrates children)
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: splitBy === "letter" ? 0.03 : 0.08,
      },
    },
  };

  // Individual item variant
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: easing,
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1000 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          className={cn(
            "inline-block",
            splitBy === "word" && "mr-[0.25em]",
            splitBy === "letter" && item === " " && "mr-[0.25em]"
          )}
          variants={itemVariants}
          style={{ transformOrigin: "50% 100%" }}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Simpler fade-in text (for less dramatic effect)
 */
interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeInText({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: FadeInTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}