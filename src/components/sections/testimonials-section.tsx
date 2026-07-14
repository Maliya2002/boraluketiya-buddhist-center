// src/components/sections/testimonials-section.tsx
// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS SECTION
// Testimonials carousel with Google Reviews stats
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials, googleReviewsStats } from "@/data/testimonials-data";

interface TestimonialsSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function TestimonialsSection({
  className,
  language = "en",
}: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Testimonials"
    >
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-4">
              <MessageCircle className="h-4 w-4 text-gold-500" />
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Community Voices
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              What Our{" "}
              <span className="text-gradient-gold">Community</span> Says
            </h2>
          </RevealOnScroll>

          {/* Google Reviews stats */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>
                <span className="font-heading text-2xl font-semibold text-foreground">
                  {googleReviewsStats.averageRating}
                </span>
              </div>
              <span className="text-muted-foreground">
                ({googleReviewsStats.totalReviews} Google Reviews)
              </span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Carousel */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="relative">
            {/* Embla carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      language={language}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={scrollPrev}
                className="h-12 w-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-gold-950 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="h-12 w-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-gold-950 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}