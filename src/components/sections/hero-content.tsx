// src/components/sections/hero-content.tsx
// ═══════════════════════════════════════════════════════════════
// HERO CONTENT
// ═══════════════════════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TextReveal, FadeInText } from "@/components/animations/text-reveal";
import { MagneticButton } from "@/components/common/magnetic-button";
import { siteConfig } from "@/constants/site-config";

interface HeroContentProps {
  language?: "en" | "si";
  className?: string;
}

// ✅ CORRECTED: Boralukatiya
const heroContent = {
  en: {
    subtitle: "Sacred Wisdom · Eternal Peace",
    title: {
      line1: "Boralukatiya",
      line2: "Buddhist Center",
    },
    description:
      "A sanctuary of peace, wisdom, and compassion in the sacred land of Kamburupitiya. Discover the ancient teachings of the Buddha and find your path to enlightenment.",
    primaryCta: "Explore Our Temple",
    secondaryCta: "Support Our Mission",
    trustIndicator: "Live Streaming Available",
  },
  si: {
    subtitle: "පවිත්‍ර ප්‍රඥාව · සදාකාලික සාමය",
    title: {
      line1: "බොරලුකැටිය",
      line2: "බෞද්ධ මධ්‍යස්ථානය",
    },
    description:
      "කඹුරුපිටියේ පවිත්‍ර භූමියේ පිහිටි සාමය, ප්‍රඥාව සහ කරුණාවේ අභයභූමියකි. බුදුරජාණන් වහන්සේගේ පැරණි ඉගැන්වීම් සොයාගෙන ඔබේ මාර්ගය සොයාගන්න.",
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
        className
      )}
    >
      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6 flex items-center gap-3"
      >
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
      </motion.div>

      {/* Main heading */}
      <h1 className="mb-6">
        <span
          className={cn(
            "block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-light text-white leading-none tracking-tight",
            isSinhala && "sinhala"
          )}
        >
          <TextReveal
            text={content.title.line1}
            splitBy="word"
            delay={0.4}
            className="block text-gradient-gold"
          />
          <TextReveal
            text={content.title.line2}
            splitBy="word"
            delay={0.8}
            className="block mt-2"
          />
        </span>
      </h1>

      {/* Sinhala subtitle (shown when in English mode) */}
      {!isSinhala && (
        <FadeInText delay={1.6} duration={1} className="mb-8">
          <p className="sinhala text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
            {siteConfig.nameSinhala}
          </p>
        </FadeInText>
      )}

      {/* English subtitle (shown when in Sinhala mode) */}
      {isSinhala && (
        <FadeInText delay={1.6} duration={1} className="mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light font-heading italic">
            Boralukatiya Buddhist Center
          </p>
        </FadeInText>
      )}

      {/* Decorative divider */}
      <FadeInText delay={1.8} duration={0.8}>
        <div className="flex items-center gap-4 mb-8 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <div className="text-gold-500 text-3xl">❖</div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-transparent" />
        </div>
      </FadeInText>

      {/* Description */}
      <FadeInText delay={2} duration={1} className="mb-10 max-w-2xl">
        <p
          className={cn(
            "text-base md:text-lg lg:text-xl text-white/80 leading-relaxed",
            isSinhala && "sinhala"
          )}
        >
          {content.description}
        </p>
      </FadeInText>

      {/* CTA Buttons */}
      <FadeInText delay={2.3} duration={0.8}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary CTA */}
          <MagneticButton
            href="/about"
            variant="gold"
            size="lg"
            className={cn("group", isSinhala && "sinhala")}
          >
            <span>{content.primaryCta}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </MagneticButton>

          {/* Secondary CTA */}
          <Link
            href="/donate"
            className={cn(
              "group inline-flex items-center gap-2 px-8 py-4",
              "text-base font-semibold text-white",
              "border-2 border-white/30 rounded-full",
              "backdrop-blur-sm bg-white/5",
              "transition-all duration-300",
              "hover:bg-white/10 hover:border-white/50",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
              isSinhala && "sinhala"
            )}
          >
            <Heart className="h-5 w-5 text-lotus-400 transition-transform group-hover:scale-110" />
            <span>{content.secondaryCta}</span>
          </Link>
        </div>
      </FadeInText>

      {/* Trust indicators */}
      <FadeInText delay={2.6} duration={0.8}>
        <div className="mt-12 flex items-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-bodhi-500 animate-pulse" />
            <span className={cn(isSinhala && "sinhala")}>
              {content.trustIndicator}
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/20" />
          <span className="hidden sm:block">✨ 2568 BE</span>
        </div>
      </FadeInText>
    </div>
  );
}