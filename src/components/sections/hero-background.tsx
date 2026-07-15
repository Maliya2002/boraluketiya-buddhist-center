// src/components/sections/hero-background.tsx
// ═══════════════════════════════════════════════════════════════
// HERO BACKGROUND - Highly optimized for performance
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  images?: string[];
  className?: string;
}

// Use smaller, optimized images for mobile
const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=75&auto=format&fit=crop",
];

export function HeroBackground({
  images = DEFAULT_IMAGES,
  className,
}: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        "bg-gradient-to-br from-temple-900 via-gold-900/40 to-temple-800",
        className
      )}
      aria-hidden="true"
    >
      {/* Single optimized image - no slideshow for performance */}
      <div className="absolute inset-0">
        <Image
          src={images[0]}
          alt=""
          fill
          priority
          quality={75}
          className="object-cover"
          sizes="100vw"
          unoptimized={images[0].startsWith("http")}
        />
      </div>

      {/* Simple overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
    </div>
  );
}