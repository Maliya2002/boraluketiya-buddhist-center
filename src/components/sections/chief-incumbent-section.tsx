// src/components/sections/chief-incumbent-section.tsx
// ═══════════════════════════════════════════════════════════════
// CHIEF INCUMBENT SECTION
// Beautiful profile card for the chief monk
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

interface ChiefIncumbentSectionProps {
  className?: string;
  language?: "en" | "si";
}

const chiefIncumbent = {
  name: {
    en: "Venerable Andarawewa Dhammaloka Thero",
    si: "පූජ්‍ය අන්දරවැව ධම්මාලෝක ස්වාමින් වහන්සේ",
  },
  title: {
    en: "Chief Incumbent",
    si: "ප්‍රධාන නාහිමිපාණෝ",
  },
  quote: {
    en: "Peace comes from within. Do not seek it without.",
    si: "සාමය පැමිණෙන්නේ ඇතුළතින්. පිටතින් සොයන්න එපා.",
  },
  bio: {
    en: "With over 10 years of dedicated service to the Buddhist community, our Chief Incumbent has been guiding devotees on the path to enlightenment. His wisdom, compassion, and unwavering commitment to Buddhist teachings continue to inspire generations.",
    si: "බෞද්ධ ප්‍රජාවට වසර 10කට වැඩි කාලයක් කැපවූ සේවයක් සමඟින්, අපගේ ප්‍රධාන නාහිමිපාණෝ දේවනියන් බෝධි මාර්ගය වෙත මඟපෙන්වමින් සිටී.",
  },
  yearsOfService: 10,
};

export function ChiefIncumbentSection({
  className,
  language = "en",
}: ChiefIncumbentSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Chief Incumbent"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-temple-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealOnScroll direction="up">
            <p className="text-subtitle text-gold-500 mb-4">
              Spiritual Leadership
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Our <span className="text-gradient-gold">Chief Incumbent</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Profile card */}
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Photo side */}
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-gold-500/20 via-saffron-500/10 to-temple-500/20 rounded-3xl blur-2xl" />

                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-saffron-800 via-gold-800 to-temple-700 border-2 border-gold-500/30">
                  {/* Buddha icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-9xl"
                    >
                      🧘
                    </motion.div>
                  </div>

                  {/* Golden aura */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gold-500/20" />

                  {/* Years badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-dark rounded-2xl p-4 border border-gold-500/30">
                      <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                        Years of Service
                      </p>
                      <p className="text-white font-heading text-3xl">
                        {chiefIncumbent.yearsOfService}+ Years
                      </p>
                    </div>
                  </div>

                  {/* Ornamental corners */}
                  <svg
                    className="absolute top-4 left-4 w-16 h-16 text-gold-500"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M10 30 L10 10 L30 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                  </svg>
                  <svg
                    className="absolute top-4 right-4 w-16 h-16 text-gold-500 rotate-90"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M10 30 L10 10 L30 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Content side */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <p className="text-subtitle text-gold-500 mb-2">
                    {chiefIncumbent.title[language]}
                  </p>
                  <h3
                    className={cn(
                      "font-heading text-3xl md:text-4xl text-foreground",
                      language === "si" && "sinhala"
                    )}
                  >
                    {chiefIncumbent.name[language]}
                  </h3>
                </div>

                {/* Quote */}
                <div className="relative pl-8 py-2">
                  <Quote className="absolute left-0 top-0 h-6 w-6 text-gold-500/60" />
                  <blockquote
                    className={cn(
                      "text-lg md:text-xl italic text-foreground/80 leading-relaxed border-l-2 border-gold-500/30 pl-4",
                      language === "si" && "sinhala not-italic"
                    )}
                  >
                    &ldquo;{chiefIncumbent.quote[language]}&rdquo;
                  </blockquote>
                </div>

                {/* Bio */}
                <p
                  className={cn(
                    "text-base text-muted-foreground leading-relaxed",
                    language === "si" && "sinhala"
                  )}
                >
                  {chiefIncumbent.bio[language]}
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
                  <div className="text-gold-500 text-xl">❖</div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/30 to-transparent" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}