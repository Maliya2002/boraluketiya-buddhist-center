// src/components/ui/event-card.tsx
// ═══════════════════════════════════════════════════════════════
// EVENT CARD
// Beautiful card for displaying an event
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventData } from "@/data/events-data";

interface EventCardProps {
  event: EventData;
  language?: "en" | "si";
  className?: string;
}

export function EventCard({
  event,
  language = "en",
  className,
}: EventCardProps) {
  const date = new Date(event.date);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });

  const categoryColors: Record<string, string> = {
    poya: "bg-gold-500/10 text-gold-500 border-gold-500/30",
    dhamma: "bg-temple-500/10 text-temple-600 border-temple-500/30",
    community: "bg-bodhi-500/10 text-bodhi-600 border-bodhi-500/30",
    school: "bg-dharma-500/10 text-dharma-500 border-dharma-500/30",
    youth: "bg-saffron-500/10 text-saffron-500 border-saffron-500/30",
    special: "bg-lotus-500/10 text-lotus-500 border-lotus-500/30",
  };

  const attendancePercent = event.maxAttendees
    ? ((event.attendees || 0) / event.maxAttendees) * 100
    : 0;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative bg-card rounded-3xl overflow-hidden",
        "border border-gold-500/10 hover:border-gold-500/30",
        "shadow-soft-sm hover:shadow-soft-lg",
        "transition-all duration-500",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title.en}
          fill
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={event.image.startsWith("http")}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg">
          <div className="px-4 py-1 bg-gold-500 text-gold-950">
            <span className="text-xs font-bold uppercase tracking-wider">
              {month}
            </span>
          </div>
          <div className="px-4 py-2">
            <span className="text-2xl font-heading font-bold text-foreground">
              {day}
            </span>
          </div>
        </div>

        {/* Featured badge */}
        {event.isFeatured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gold-500 text-gold-950 rounded-full text-xs font-semibold shadow-lg">
            <span>⭐</span>
            <span>Featured</span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md",
              categoryColors[event.category] || categoryColors.dhamma
            )}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>

        {/* Free badge */}
        {event.isFree && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-bodhi-500 text-white rounded-full text-xs font-semibold">
            Free
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className={cn(
            "font-heading text-xl md:text-2xl font-medium text-foreground mb-3",
            "group-hover:text-gold-500 transition-colors duration-300",
            "line-clamp-2",
            language === "si" && "sinhala"
          )}
        >
          {event.title[language]}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
            language === "si" && "sinhala"
          )}
        >
          {event.description[language]}
        </p>

        {/* Meta info */}
        <div className="space-y-2 mb-4">
          {/* Time */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-gold-500 flex-shrink-0" />
            <span>{event.time}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0" />
            <span className={cn("truncate", language === "si" && "sinhala")}>
              {event.location[language]}
            </span>
          </div>

          {/* Attendees */}
          {event.attendees !== undefined && event.maxAttendees && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-gold-500 flex-shrink-0" />
              <span>
                {event.attendees} / {event.maxAttendees} attending
              </span>
            </div>
          )}
        </div>

        {/* Attendance bar */}
        {attendancePercent > 0 && (
          <div className="mb-4">
            <div className="h-1.5 bg-gold-500/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${attendancePercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-gold-500 to-saffron-500 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Action button */}
        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors group/link"
        >
          <span>Learn More & Register</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
}