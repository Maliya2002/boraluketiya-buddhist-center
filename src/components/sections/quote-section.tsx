// src/components/sections/quote-section.tsx
// ═══════════════════════════════════════════════════════════════
// QUOTE SECTION
// Daily Buddhist wisdom quote
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { getDailyQuote } from "@/data/quotes-data";

interface QuoteSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function QuoteSection({
  className,
  language = "en",
}: QuoteSectionProps) {
  const quote = getDailyQuote();

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        "bg-gradient-to-br from-gold-500/10 via-transparent to-temple-500/10",
        className
      )}
      aria-label="Daily quote"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote
          className="absolute top-10 left-10 h-32 w-32 text-gold-500/10"
          strokeWidth={1}
        />
        <Quote
          className="absolute bottom-10 right-10 h-32 w-32 text-gold-500/10 rotate-180"
          strokeWidth={1}
        />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-8">
              <span className="text-gold-500">✨</span>
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Wisdom of the Day
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <motion.blockquote
              className="relative mb-8"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.8 }}
            >
              {/* Opening quote */}
              <div className="text-6xl md:text-8xl text-gold-500/30 font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                className={cn(
                  "text-2xl md:text-3xl lg:text-4xl font-heading font-light italic text-foreground leading-relaxed",
                  language === "si" && "sinhala not-italic"
                )}
              >
                {quote.quote[language]}
              </p>

              {/* Closing quote */}
              <div className="text-6xl md:text-8xl text-gold-500/30 font-serif leading-none mt-4 rotate-180 inline-block">
                &ldquo;
              </div>
            </motion.blockquote>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.4}>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
              <p className="text-sm uppercase tracking-widest text-gold-600 font-medium">
                — {quote.source}
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}