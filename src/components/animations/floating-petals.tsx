// src/components/animations/floating-petals.tsx
// ═══════════════════════════════════════════════════════════════
// FLOATING PETALS ANIMATION
// Beautiful falling gold/lotus petals with random movement
// React 19 compatible - generates randomness in useEffect
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
  color: string;
  rotationSpeed: number;
}

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

const PETAL_COLORS = [
  "#D4AF37", // Gold
  "#F5E27B", // Light gold
  "#FFB6C1", // Light pink (lotus)
  "#FFCBA4", // Peach
  "#F0E68C", // Khaki gold
];

/**
 * Generate random petals data
 * Called only on client-side after mount to avoid hydration issues
 */
function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 15,
    animationDuration: 15 + Math.random() * 15,
    size: 8 + Math.random() * 12,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    rotationSpeed: 360 + Math.random() * 720,
  }));
}

export function FloatingPetals({
  count = 15,
  className,
}: FloatingPetalsProps) {
  // ✅ FIXED: Generate petals in useEffect, not during render
  const [petals, setPetals] = React.useState<Petal[]>([]);

  React.useEffect(() => {
    // Generate on client-side only, asynchronously to avoid synchronous state updates in effects
    const timeout = window.setTimeout(() => {
      setPetals(generatePetals(count));
    }, 0);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [count]);

  // Don't render anything until petals are generated (avoids hydration mismatch)
  if (petals.length === 0) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <PetalItem key={petal.id} petal={petal} />
      ))}
    </div>
  );
}

function PetalItem({ petal }: { petal: Petal }) {
  return (
    <motion.div
      className="absolute top-0"
      style={{
        left: `${petal.left}%`,
      }}
      initial={{
        y: -50,
        opacity: 0,
        rotate: 0,
      }}
      animate={{
        y: "110vh",
        opacity: [0, 1, 1, 0],
        rotate: petal.rotationSpeed,
        x: [0, 30, -30, 20, -10, 0],
      }}
      transition={{
        duration: petal.animationDuration,
        delay: petal.animationDelay,
        repeat: Infinity,
        ease: "linear",
        opacity: {
          times: [0, 0.1, 0.9, 1],
        },
        x: {
          duration: petal.animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        width={petal.size}
        height={petal.size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lotus petal shape */}
        <path
          d="M10 2C10 2 4 6 4 12C4 15.5 6.5 18 10 18C13.5 18 16 15.5 16 12C16 6 10 2 10 2Z"
          fill={petal.color}
          fillOpacity="0.8"
        />
      </svg>
    </motion.div>
  );
}