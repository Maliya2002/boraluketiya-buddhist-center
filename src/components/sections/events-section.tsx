// src/components/sections/events-section.tsx
// ═══════════════════════════════════════════════════════════════
// EVENTS SECTION
// Grid of upcoming events with category filter
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { EventCard } from "@/components/ui/event-card";
import { upcomingEvents, eventCategories, type EventCategory } from "@/data/events-data";

interface EventsSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function EventsSection({
  className,
  language = "en",
}: EventsSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<EventCategory | "all">("all");

  // Filter events by category
  const filteredEvents = React.useMemo(() => {
    if (activeCategory === "all") return upcomingEvents;
    return upcomingEvents.filter((event) => event.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Upcoming events"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lotus-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-4">
              <Calendar className="h-4 w-4 text-gold-500" />
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Upcoming Events
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Join Our{" "}
              <span className="text-gradient-gold">Sacred Gatherings</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Be part of our vibrant community. From Poya day ceremonies to
              meditation retreats — everyone is welcome to join.
            </p>
          </RevealOnScroll>
        </div>

        {/* Category filters */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {eventCategories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  setActiveCategory(category.value as EventCategory | "all")
                }
                className={cn(
                  "px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium",
                  "border-2 transition-all duration-300",
                  "hover:scale-105",
                  activeCategory === category.value
                    ? "bg-gold-500 border-gold-500 text-gold-950 shadow-gold-md"
                    : "border-gold-500/20 text-foreground hover:border-gold-500/50 hover:bg-gold-500/10"
                )}
              >
                <span className={cn(language === "si" && "sinhala")}>
                  {category.label[language]}
                </span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} language={language} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No events in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* View all button */}
        {filteredEvents.length > 0 && (
          <RevealOnScroll direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/events"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4",
                  "text-sm font-semibold rounded-full",
                  "border-2 border-gold-500 text-gold-500",
                  "hover:bg-gold-500 hover:text-gold-950",
                  "transition-all duration-300",
                  "group"
                )}
              >
                <span>View All Events</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}