// src/components/animations/reveal-on-scroll.tsx
// ═══════════════════════════════════════════════════════════════
// REVEAL ON SCROLL - Optimized for mobile
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion, type Variants, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

// Detect mobile
function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

// Detect reduced motion
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  threshold = 0.1,
}: RevealOnScrollProps) {
  const [mobile, setMobile] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setMobile(isMobile());
    setReducedMotion(prefersReducedMotion());
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
    rootMargin: "0px",
  });

  const easing = cubicBezier(0.25, 0.46, 0.45, 0.94);

  // Reduce distance and duration on mobile
  const actualDistance = mobile ? Math.min(distance, 20) : distance;
  const actualDuration = mobile ? Math.min(duration, 0.4) : duration;

  const getVariants = (): Variants => {
    if (reducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      };
    }

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: actualDistance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -actualDistance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: actualDistance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -actualDistance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: actualDuration, delay, ease: easing },
          },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={getVariants()}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}) {
  const easing = cubicBezier(0.25, 0.46, 0.45, 0.94);

  const getVariants = (): Variants => {
    const initial = {
      up: { opacity: 0, y: distance },
      down: { opacity: 0, y: -distance },
      left: { opacity: 0, x: distance },
      right: { opacity: 0, x: -distance },
    }[direction];

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, ease: easing },
      },
    };
  };

  return (
    <motion.div className={cn(className)} variants={getVariants()}>
      {children}
    </motion.div>
  );
}