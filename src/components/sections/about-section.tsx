// src/components/sections/about-section.tsx
// ═══════════════════════════════════════════════════════════════
// ABOUT SECTION
// Story-driven introduction to the temple
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

interface AboutSectionProps {
  className?: string;
  language?: "en" | "si";
}

const values = [
  {
    icon: Sparkles,
    title: { en: "Wisdom", si: "ප්‍රඥාව" },
    description: {
      en: "Ancient teachings for modern life",
      si: "නවීන ජීවිතය සඳහා පුරාණ ඉගැන්වීම්",
    },
  },
  {
    icon: Heart,
    title: { en: "Compassion", si: "කරුණාව" },
    description: {
      en: "Loving-kindness for all beings",
      si: "සියලු සත්වයන්ට මෛත්‍රී",
    },
  },
  {
    icon: Users,
    title: { en: "Community", si: "ප්‍රජාව" },
    description: {
      en: "Together in spiritual growth",
      si: "ආධ්‍යාත්මික වර්ධනයේ එකට",
    },
  },
];

export function AboutSection({
  className,
  language = "en",
}: AboutSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="About us"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-temple-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealOnScroll direction="up">
            <p className="text-subtitle text-gold-500 mb-4">
              Our Sacred Story
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              A Century of{" "}
              <span className="text-gradient-gold">Spiritual Wisdom</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              For over a hundred years, our temple has stood as a beacon of
              peace, wisdom, and compassion in the heart of Kamburupitiya.
            </p>
          </RevealOnScroll>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <RevealOnScroll direction="right">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-temple-500/20 rounded-3xl blur-2xl" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-temple-800 via-gold-900 to-temple-700 border border-gold-500/20">
                {/* Placeholder pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-9xl"
                  >
                    🏛️
                  </motion.div>
                </div>

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm uppercase tracking-widest mb-2">
                    Since 1920
                  </p>
                  <p className="text-white font-heading text-2xl">
                    Sacred Grounds
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/60 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/60 rounded-br-2xl" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Content */}
          <div className="space-y-8">
            <RevealOnScroll direction="left">
              <div className="space-y-4">
                <h3 className="font-heading text-3xl md:text-4xl text-foreground">
                  Where Ancient Wisdom Meets{" "}
                  <span className="text-gradient-gold">Modern Souls</span>
                </h3>
                <p className="text-body text-muted-foreground">
                  Nestled in the peaceful land of Kamburupitiya, our temple
                  has been a sanctuary of Buddhist teachings and community
                  service for over a century. We welcome all who seek peace,
                  wisdom, and understanding.
                </p>
                <p className="text-body text-muted-foreground">
                  From daily meditation sessions to grand Poya day
                  celebrations, from teaching young minds at our Dhamma school
                  to empowering youth through community service — we are more
                  than a temple. We are a family united by the Buddha&apos;s
                  teachings.
                </p>
              </div>
            </RevealOnScroll>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <RevealOnScroll
                  key={value.title.en}
                  direction="up"
                  delay={0.2 + index * 0.1}
                >
                  <div className="group p-4 rounded-2xl border border-gold-500/10 bg-gradient-to-br from-gold-500/5 to-transparent hover:border-gold-500/30 hover:bg-gold-500/10 transition-all duration-300">
                    <value.icon className="h-6 w-6 text-gold-500 mb-3 transition-transform group-hover:scale-110" />
                    <h4
                      className={cn(
                        "font-heading font-medium text-foreground mb-1",
                        language === "si" && "sinhala"
                      )}
                    >
                      {value.title[language]}
                    </h4>
                    <p
                      className={cn(
                        "text-xs text-muted-foreground",
                        language === "si" && "sinhala"
                      )}
                    >
                      {value.description[language]}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}