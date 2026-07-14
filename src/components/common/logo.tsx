// src/components/common/logo.tsx
// ═══════════════════════════════════════════════════════════════
// LOGO COMPONENT
// Uses SVG fallback when logo image is not available
// ═══════════════════════════════════════════════════════════════

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, cubicBezier, type Variants } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  LOGO_PATHS,
  LOGO_SIZES,
  LOGO_META,
  type LogoSize,
  type LogoVariant,
} from "@/constants/logo";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  width?: number;
  height?: number;
  linked?: boolean;
  href?: string;
  glowOnHover?: boolean;
  animated?: boolean;
  priority?: boolean;
  className?: string;
  showText?: boolean;
  textVariant?: "en" | "si" | "both";
  textColor?: "default" | "white" | "gold";
}

/**
 * Beautiful SVG fallback logo
 * Used when actual logo image is not available
 */
function FallbackLogo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full drop-shadow-lg"
    >
      <defs>
        {/* Gold gradient */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E27B" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941E" />
        </linearGradient>

        {/* Radial gold for center */}
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E27B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>

      {/* Outer circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="4"
      />

      {/* Inner circle */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2"
      />

      {/* Dharma wheel center */}
      <circle cx="100" cy="100" r="45" fill="url(#centerGrad)" />

      {/* Wheel spokes (8 spokes for Noble Eightfold Path) */}
      <g fill="none" stroke="#3D2F03" strokeWidth="2.5" strokeLinecap="round">
        <line x1="100" y1="55" x2="100" y2="145" />
        <line x1="55" y1="100" x2="145" y2="100" />
        <line x1="68" y1="68" x2="132" y2="132" />
        <line x1="132" y1="68" x2="68" y2="132" />
      </g>

      {/* Center hub */}
      <circle cx="100" cy="100" r="10" fill="#3D2F03" />
      <circle cx="100" cy="100" r="6" fill="url(#goldGrad)" />

      {/* Small lotus petals decoration */}
      <g fill="url(#goldGrad)" opacity="0.8">
        <ellipse cx="100" cy="30" rx="4" ry="8" />
        <ellipse cx="100" cy="170" rx="4" ry="8" />
        <ellipse cx="30" cy="100" rx="8" ry="4" />
        <ellipse cx="170" cy="100" rx="8" ry="4" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "full",
  size = "md",
  width,
  height,
  linked = true,
  href = "/",
  glowOnHover = true,
  animated = false,
  priority = false,
  className,
  showText = false,
  textVariant = "en",
  textColor = "default",
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const actualWidth = width ?? LOGO_SIZES[size];
  const actualHeight = height ?? LOGO_SIZES[size];
  const imagePath = LOGO_PATHS[variant].default;

  // ✅ Use fallback if no path or error
  const useFallback = !imagePath || imageError;

  const springEasing = cubicBezier(0.34, 1.56, 0.64, 1);

  const logoAnimationVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: springEasing,
      },
    },
  };

  const logoImage = (
    <motion.div
      initial={animated ? "hidden" : false}
      animate={animated ? "visible" : false}
      variants={animated ? logoAnimationVariants : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex items-center justify-center",
        linked && "cursor-pointer",
        className
      )}
      style={{
        width: actualWidth,
        height: actualHeight,
      }}
    >
      {/* Glow effect */}
      {glowOnHover && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0.1) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Logo image or fallback */}
      <motion.div
        className="relative h-full w-full"
        animate={{
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {useFallback ? (
          <FallbackLogo size={actualWidth} />
        ) : (
          <Image
            src={imagePath}
            alt={LOGO_META.altText.en}
            width={actualWidth}
            height={actualHeight}
            priority={priority}
            quality={85}
            draggable={false}
            onError={() => setImageError(true)}
            className={cn(
              "h-full w-full object-contain",
              "transition-all duration-500",
              isHovered && glowOnHover && "brightness-110"
            )}
          />
        )}
      </motion.div>

      {/* Rotating ring effect */}
      {glowOnHover && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full"
          animate={{
            rotate: isHovered ? 360 : 0,
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{
            duration: 20,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(212, 175, 55, 0.3) 25%, transparent 50%, rgba(212, 175, 55, 0.3) 75%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );

  // With text
  const logoWithText = showText ? (
    <div className="flex items-center gap-3">
      {logoImage}
      <div className="flex flex-col">
        {(textVariant === "en" || textVariant === "both") && (
          <span
            className={cn(
              "font-heading font-medium leading-tight",
              size === "xs" && "text-sm",
              size === "sm" && "text-base",
              size === "md" && "text-lg",
              size === "lg" && "text-xl",
              (size === "xl" || size === "2xl") && "text-2xl",
              textColor === "default" && "text-foreground",
              textColor === "white" && "text-white",
              textColor === "gold" && "text-gold-500"
            )}
          >
            Boraluketiya
          </span>
        )}
        {(textVariant === "si" || textVariant === "both") && (
          <span
            className={cn(
              "sinhala leading-tight",
              size === "xs" && "text-xs",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-lg",
              (size === "xl" || size === "2xl") && "text-xl",
              textColor === "default" && "text-muted-foreground",
              textColor === "white" && "text-white/80",
              textColor === "gold" && "text-gold-500/80"
            )}
          >
            බෞද්ධ මධ්‍යස්ථානය
          </span>
        )}
      </div>
    </div>
  ) : (
    logoImage
  );

  if (linked) {
    return (
      <Link
        href={href}
        aria-label={LOGO_META.altText.en}
        className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
      >
        {logoWithText}
      </Link>
    );
  }

  return logoWithText;
}

// Preset variants
export function NavbarLogo(props: Partial<LogoProps>) {
  return (
    <Logo
      variant="full"
      size="md"
      linked={true}
      priority={true}
      glowOnHover={true}
      showText={false}
      {...props}
    />
  );
}

export function FooterLogo(props: Partial<LogoProps>) {
  return (
    <Logo
      variant="full"
      size="lg"
      linked={true}
      priority={false}
      glowOnHover={true}
      showText={true}
      textVariant="both"
      {...props}
    />
  );
}

export function HeroLogo(props: Partial<LogoProps>) {
  return (
    <Logo
      variant="full"
      size="3xl"
      linked={false}
      priority={true}
      glowOnHover={true}
      animated={true}
      showText={false}
      {...props}
    />
  );
}