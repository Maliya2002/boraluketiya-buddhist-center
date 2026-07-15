// src/components/sections/hero-content.tsx
// ═══════════════════════════════════════════════════════════════
// HERO CONTENT - Simplified for performance
// ═══════════════════════════════════════════════════════════════

"use client";

import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

interface HeroContentProps {
  language?: "en" | "si";
  className?: string;
}

const heroContent = {
  en: {
    subtitle: "Sacred Wisdom · Eternal Peace",
    title1: "Boralukatiya",
    title2: "Buddhist Center",
    description:
      "A sanctuary of peace, wisdom, and compassion in the sacred land of Kamburupitiya.",
    primaryCta: "Explore Our Temple",
    secondaryCta: "Support Our Mission",
    trustIndicator: "Live Streaming Available",
  },
  si: {
    subtitle: "පවිත්‍ර ප්‍රඥාව · සදාකාලික සාමය",
    title1: "බොරලුකැටිය",
    title2: "බෞද්ධ මධ්‍යස්ථානය",
    description:
      "කඹුරුපිටියේ පවිත්‍ර භූමියේ පිහිටි සාමය, ප්‍රඥාව සහ කරුණාවේ අභයභූමියකි.",
    primaryCta: "අපගේ විහාරය බලන්න",
    secondaryCta: "දායකත්වය",
    trustIndicator: "සජීවී ප්‍රවාහනය",
  },
};

export function HeroContent({
  language = "en",
  className,
}: HeroContentProps) {
  const content = heroContent[language];
  const isSinhala = language === "si";

  return (
    <div
      className={cn(
        "relative z-10 flex flex-col items-center text-center",
        "px-4 max-w-5xl mx-auto",
        "animate-fade-in",
        className
      )}
    >
      {/* Subtitle */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
        <span
          className={cn(
            "text-xs md:text-sm uppercase tracking-[0.4em] text-gold-500 font-medium",
            isSinhala && "sinhala normal-case tracking-wide"
          )}
        >
          {content.subtitle}
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
      </div>

      {/* Main heading */}
      <h1 className="mb-6">
        <span
          className={cn(
            "block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-light text-white leading-none tracking-tight",
            isSinhala && "sinhala"
          )}
        >
          <span className="block text-gradient-gold">{content.title1}</span>
          <span className="block mt-2">{content.title2}</span>
        </span>
      </h1>

      {/* Sinhala/English subtitle */}
      {!isSinhala && (
        <p className="sinhala text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8">
          {siteConfig.nameSinhala}
        </p>
      )}
      {isSinhala && (
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light font-heading italic mb-8">
          Boralukatiya Buddhist Center
        </p>
      )}

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8 max-w-md mx-auto">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="text-gold-500 text-3xl">❖</div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-transparent" />
      </div>

      {/* Description */}
      <p
        className={cn(
          "text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl",
          isSinhala && "sinhala"
        )}
      >
        {content.description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        {/* Primary CTA */}
        <Link
          href="/about"
          className={cn(
            "group inline-flex items-center gap-2 px-8 py-4",
            "text-base font-semibold rounded-full",
            "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950",
            "hover:shadow-gold-lg active:scale-95",
            "transition-all duration-300",
            isSinhala && "sinhala"
          )}
        >
          <span>{content.primaryCta}</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/donate"
          className={cn(
            "group inline-flex items-center gap-2 px-8 py-4",
            "text-base font-semibold text-white",
            "border-2 border-white/30 rounded-full",
            "bg-white/5 hover:bg-white/10 active:scale-95",
            "transition-all duration-300",
            isSinhala && "sinhala"
          )}
        >
          <Heart className="h-5 w-5 text-lotus-400 transition-transform group-hover:scale-110" />
          <span>{content.secondaryCta}</span>
        </Link>
      </div>

      {/* Trust indicators */}
      <div className="flex items-center gap-6 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-bodhi-500 animate-pulse" />
          <span className={cn(isSinhala && "sinhala")}>
            {content.trustIndicator}
          </span>
        </div>
        <div className="hidden sm:block h-4 w-px bg-white/20" />
        <span className="hidden sm:block">✨ 2568 BE</span>
      </div>
    </div>
  );
}