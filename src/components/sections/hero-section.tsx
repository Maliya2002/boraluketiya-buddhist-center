// src/components/sections/hero-section.tsx
// ═══════════════════════════════════════════════════════════════
// HERO SECTION - Simplified for performance
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { ScrollIndicator } from "./scroll-indicator";
import { HeroWidgets } from "./hero-widgets";

interface HeroSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function HeroSection({
  className,
  language = "en",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
        "-mt-20 pt-20",
        className
      )}
      aria-label="Hero section"
    >
      {/* Background */}
      <HeroBackground />

      {/* Main content */}
      <div className="relative z-10 w-full container-custom py-20">
        <HeroContent language={language} />
        <HeroWidgets language={language} />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}