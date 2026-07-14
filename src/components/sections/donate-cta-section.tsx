// src/components/sections/donate-cta-section.tsx
// ═══════════════════════════════════════════════════════════════
// DONATE CTA SECTION
// Call to action for donations
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

interface DonateCtaSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function DonateCtaSection({
  className,
  language = "en",
}: DonateCtaSectionProps) {
  const features = [
    { icon: Heart, text: "One-Time or Monthly" },
    { icon: Users, text: "Support Community" },
    { icon: Sparkles, text: "Merit for Life" },
  ];

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        "bg-gradient-to-br from-temple-900 via-gold-900 to-temple-800",
        className
      )}
      aria-label="Donation call to action"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gold circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gold-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-saffron-500/20 blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll direction="up">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gold-500 mb-8 shadow-gold-lg"
            >
              <Heart className="h-10 w-10 text-gold-950 fill-current" />
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 text-balance">
              Your Donation{" "}
              <span className="text-gradient-gold">Changes Lives</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Support our temple, education programs, and community services.
              Every contribution helps preserve Buddhist teachings for future
              generations.
            </p>
          </RevealOnScroll>

          {/* Features */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-white/90"
                >
                  <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-gold-400" />
                  </div>
                  <span className="text-sm md:text-base">{feature.text}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA Buttons */}
          <RevealOnScroll direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/donate"
                className={cn(
                  "group inline-flex items-center gap-2 px-10 py-5",
                  "text-lg font-semibold rounded-full",
                  "bg-gold-500 text-gold-950",
                  "hover:bg-gold-600 hover:shadow-gold-xl",
                  "transition-all duration-300",
                  "active:scale-95"
                )}
              >
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className={cn(
                  "inline-flex items-center gap-2 px-10 py-5",
                  "text-lg font-semibold rounded-full",
                  "border-2 border-white/30 text-white",
                  "hover:bg-white/10 hover:border-white/50",
                  "transition-all duration-300"
                )}
              >
                <span>Learn More</span>
              </Link>
            </div>
          </RevealOnScroll>

          {/* Trust indicator */}
          <RevealOnScroll direction="up" delay={0.5}>
            <p className="mt-8 text-sm text-white/60">
              🔒 Secure donations · 100% goes to temple activities
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}