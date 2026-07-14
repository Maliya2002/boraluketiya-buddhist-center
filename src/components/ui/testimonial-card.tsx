// src/components/ui/testimonial-card.tsx
// ═══════════════════════════════════════════════════════════════
// TESTIMONIAL CARD
// Individual testimonial display
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials-data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  language?: "en" | "si";
  className?: string;
}

export function TestimonialCard({
  testimonial,
  language = "en",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative p-8 md:p-10 rounded-3xl h-full",
        "bg-gradient-to-br from-gold-500/5 via-background to-temple-500/5",
        "border border-gold-500/20",
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-500/20" strokeWidth={1} />

      {/* Rating stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-gold-500 text-gold-500"
                : "text-gold-500/30"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className={cn(
          "text-lg md:text-xl italic text-foreground/90 leading-relaxed mb-6",
          language === "si" && "sinhala not-italic"
        )}
      >
        &ldquo;{testimonial.quote[language]}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gold-500/20">
        {/* Avatar placeholder */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold-500 to-temple-500 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <p className="font-heading font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p
            className={cn(
              "text-sm text-muted-foreground",
              language === "si" && "sinhala"
            )}
          >
            {testimonial.role[language]}
          </p>
        </div>
      </div>
    </div>
  );
}