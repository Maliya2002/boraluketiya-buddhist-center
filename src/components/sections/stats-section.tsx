// src/components/sections/stats-section.tsx
// ═══════════════════════════════════════════════════════════════
// STATS SECTION
// Animated statistics counter section
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/animations/counter";
import { StaggerReveal, StaggerItem } from "@/components/animations/reveal-on-scroll";
import { templeStats } from "@/data/stats-data";

interface StatsSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function StatsSection({
  className,
  language = "en",
}: StatsSectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-20 lg:py-24 overflow-hidden",
        "border-y border-gold-500/10",
        "bg-gradient-to-br from-gold-500/5 via-transparent to-temple-500/5",
        className
      )}
      aria-label="Temple statistics"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative">
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {templeStats.map((stat) => (
            <StaggerItem key={stat.label.en}>
              <div className="text-center group">
                {/* Icon */}
                <div className="text-4xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-gradient-gold">
                    <Counter
                      end={stat.value}
                      duration={2500}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3
                  className={cn(
                    "font-heading text-base md:text-lg font-medium text-foreground mb-1",
                    language === "si" && "sinhala"
                  )}
                >
                  {stat.label[language]}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    "text-xs md:text-sm text-muted-foreground",
                    language === "si" && "sinhala"
                  )}
                >
                  {stat.description[language]}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}