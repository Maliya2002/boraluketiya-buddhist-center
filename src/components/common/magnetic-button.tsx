// src/components/common/magnetic-button.tsx
// ═══════════════════════════════════════════════════════════════
// MAGNETIC BUTTON
// Premium button that follows the cursor (magnetic effect)
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  variant?: "primary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  strength = 30,
  variant = "primary",
  size = "md",
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animation for smooth movement
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Calculate mouse position relative to button center
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;

    // Apply magnetic effect (button follows mouse with reduced strength)
    x.set(mouseX * (strength / 100));
    y.set(mouseY * (strength / 100));
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  // Style variants
  const variantStyles = {
    primary: cn(
      "bg-gold-500 text-gold-950",
      "hover:bg-gold-600 hover:shadow-gold-md",
      "shadow-gold-sm"
    ),
    ghost: cn(
      "border border-gold-500 text-gold-500",
      "hover:bg-gold-500 hover:text-gold-950"
    ),
    gold: cn(
      "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-gold-950",
      "hover:shadow-gold-lg",
      "shadow-gold-md",
      "bg-[length:200%_100%]"
    ),
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full",
        "font-body font-semibold",
        "transition-colors duration-300",
        "cursor-pointer select-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <div onClick={onClick}>{buttonContent}</div>;
}