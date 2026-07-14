// src/components/animations/reveal-on-scroll.tsx
// ═══════════════════════════════════════════════════════════════
// REVEAL ON SCROLL
// Wrapper component for scroll-triggered animations
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

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true,
  threshold = 0.1,
}: RevealOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
    rootMargin: "-50px 0px",
  });

  const easing = cubicBezier(0.25, 0.46, 0.45, 0.94);

  const getVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: easing } },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: easing } },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: easing } },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: easing } },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: easing } },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease: easing } },
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

/**
 * Stagger children animations
 */
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.15,
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

/**
 * Individual stagger item
 */
export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
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
        transition: { duration: 0.6, ease: easing },
      },
    };
  };

  return (
    <motion.div className={cn(className)} variants={getVariants()}>
      {children}
    </motion.div>
  );
}