// src/components/ui/video-card.tsx
// ═══════════════════════════════════════════════════════════════
// VIDEO CARD
// YouTube-style video preview card
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VideoData } from "@/data/videos-data";

interface VideoCardProps {
  video: VideoData;
  language?: "en" | "si";
  onClick?: () => void;
  className?: string;
}

export function VideoCard({
  video,
  language = "en",
  onClick,
  className,
}: VideoCardProps) {
  const formatViews = (views?: number) => {
    if (!views) return "0";
    if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(1)}M`;
    if (views >= 1_000) return `${(views / 1_000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group text-left w-full bg-card rounded-2xl overflow-hidden",
        "border border-gold-500/10 hover:border-gold-500/30",
        "shadow-soft-sm hover:shadow-soft-lg",
        "transition-all duration-500",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title.en}
          fill
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={video.thumbnail.startsWith("http")}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gold-500 flex items-center justify-center shadow-gold-lg group-hover:shadow-gold-xl transition-shadow duration-300"
          >
            <Play className="h-6 w-6 md:h-8 md:w-8 text-gold-950 ml-1 fill-current" />
          </motion.div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-md flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>

        {/* Featured badge */}
        {video.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gold-500 text-gold-950 rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full capitalize">
          {video.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Title */}
        <h3
          className={cn(
            "font-heading text-base md:text-lg font-medium text-foreground mb-2",
            "line-clamp-2 group-hover:text-gold-500 transition-colors duration-300",
            language === "si" && "sinhala"
          )}
        >
          {video.title[language]}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm text-muted-foreground line-clamp-2 mb-3",
            language === "si" && "sinhala"
          )}
        >
          {video.description[language]}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{formatViews(video.views)} views</span>
          </div>
          <span>•</span>
          <span>
            {new Date(video.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </motion.button>
  );
}