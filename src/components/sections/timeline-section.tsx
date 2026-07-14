// src/components/sections/timeline-section.tsx
// ═══════════════════════════════════════════════════════════════
// TIMELINE SECTION
// Interactive scrollable history timeline
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { templeHistory, type TimelineEvent } from "@/data/temple-history";

interface TimelineSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function TimelineSection({
  className,
  language = "en",
}: TimelineSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Temple history timeline"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl -translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealOnScroll direction="up">
            <p className="text-subtitle text-gold-500 mb-4">Our Journey</p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              A <span className="text-gradient-gold">Sacred Legacy</span>{" "}
              Through Time
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Walk through the milestones that have shaped our temple&apos;s
              rich history and enduring legacy.
            </p>
          </RevealOnScroll>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent md:-translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-20">
            {templeHistory.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
                language={language}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TIMELINE ITEM
// ─────────────────────────────────────────────────────────────
interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  language: "en" | "si";
  isLeft: boolean;
}

function TimelineItem({ event, index, language, isLeft }: TimelineItemProps) {
  return (
    <RevealOnScroll
      direction={isLeft ? "right" : "left"}
      delay={index * 0.1}
      distance={60}
    >
      <div
        className={cn(
          "relative flex items-center gap-6 md:gap-12",
          "flex-row",
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        {/* Timeline dot */}
        <div className="absolute left-8 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
          <motion.div
            whileInView={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              "w-4 h-4 rounded-full border-4",
              event.highlight
                ? "bg-gold-500 border-gold-300 shadow-lg shadow-gold-500/50"
                : "bg-background border-gold-500"
            )}
          />
          {event.highlight && (
            <div className="absolute inset-0 rounded-full bg-gold-500/30 animate-ping" />
          )}
        </div>

        {/* Spacer for mobile alignment */}
        <div className="w-16 md:hidden" />

        {/* Content card */}
        <div
          className={cn(
            "flex-1 ml-8 md:ml-0",
            "md:max-w-md",
            isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
          )}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative p-6 rounded-2xl",
              "bg-gradient-to-br from-background to-gold-500/5",
              "border border-gold-500/20",
              "hover:border-gold-500/40",
              "hover:shadow-lg hover:shadow-gold-500/10",
              "transition-all duration-300"
            )}
          >
            {/* Icon */}
            <div className="text-3xl mb-3">{event.icon}</div>

            {/* Year */}
            <div className="mb-2">
              <span className="text-3xl md:text-4xl font-heading font-light text-gradient-gold">
                {event.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className={cn(
                "font-heading text-xl md:text-2xl font-medium text-foreground mb-3",
                language === "si" && "sinhala"
              )}
            >
              {event.title[language]}
            </h3>

            {/* Description */}
            <p
              className={cn(
                "text-sm md:text-base text-muted-foreground leading-relaxed",
                language === "si" && "sinhala"
              )}
            >
              {event.description[language]}
            </p>

            {/* Decorative corner */}
            <div
              className={cn(
                "absolute top-4 w-6 h-6 border-gold-500/30",
                "hidden md:block",
                isLeft
                  ? "right-4 border-t-2 border-r-2 rounded-tr-lg"
                  : "left-4 border-t-2 border-l-2 rounded-tl-lg"
              )}
            />
          </motion.div>
        </div>
      </div>
    </RevealOnScroll>
  );
}