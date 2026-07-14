// src/components/animations/light-rays.tsx
// ═══════════════════════════════════════════════════════════════
// LIGHT RAYS ANIMATION
// SVG animated golden light rays for divine effect
// ═══════════════════════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LightRaysProps {
  position?: "top" | "top-left" | "top-right" | "center";
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}

export function LightRays({
  position = "top",
  intensity = "medium",
  className,
}: LightRaysProps) {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 origin-top",
    "top-left": "top-0 left-0 origin-top-left",
    "top-right": "top-0 right-0 origin-top-right",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center",
  };

  const intensityValues = {
    subtle: { opacity: 0.15, blur: 40 },
    medium: { opacity: 0.25, blur: 30 },
    strong: { opacity: 0.4, blur: 20 },
  };

  const { opacity, blur } = intensityValues[intensity];

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        positionClasses[position],
        className
      )}
      aria-hidden="true"
    >
      <motion.svg
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ filter: `blur(${blur}px)` }}
      >
        <defs>
          {/* Gradient for rays */}
          <linearGradient
            id="rayGradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#D4AF37"
              stopOpacity={opacity * 1.5}
            />
            <stop offset="50%" stopColor="#F5E27B" stopOpacity={opacity} />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated rays */}
        {[...Array(9)].map((_, i) => {
          const rotation = -60 + i * 15; // -60° to +60°
          return (
            <motion.polygon
              key={i}
              points="400,0 380,600 420,600"
              fill="url(#rayGradient)"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: [0, 1, 0.7, 1],
                scaleY: [0, 1, 0.9, 1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "400px 0px",
                transform: `rotate(${rotation}deg)`,
              }}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}