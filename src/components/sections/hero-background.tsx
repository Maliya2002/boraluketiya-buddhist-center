// src/components/sections/hero-background.tsx
// ═══════════════════════════════════════════════════════════════
// HERO BACKGROUND
// Ken Burns effect background with dark overlay
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  images?: string[];
  autoPlayInterval?: number;
  className?: string;
}

// Temple photographs supplied with the project.
const DEFAULT_IMAGES = [
  "/images/gallery/temple-night.jpg",
  "/images/gallery/temple-bodhi.jpg",
];

export function HeroBackground({
  images = DEFAULT_IMAGES,
  autoPlayInterval = 7000,
  className,
}: HeroBackgroundProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Auto-play slideshow
  React.useEffect(() => {
    if (images.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, paused]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        // ✅ Fallback gradient in case images fail
        "bg-gradient-to-br from-temple-900 via-gold-900/40 to-temple-800",
        className
      )}
    >
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: autoPlayInterval / 1000, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt=""
            fill
            priority={currentIndex === 0}
            quality={85}
            className="object-cover"
            sizes="100vw"
            unoptimized={images[currentIndex].startsWith("http")}
          />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Gold radial glow in center */}
      <div className="absolute inset-0 bg-radial-gold opacity-30" />

      {/* Noise texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="min-h-11 rounded-full bg-black/60 px-3 text-xs text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
            aria-label={paused ? "Play temple slideshow" : "Pause temple slideshow"}
          >
            {paused ? "Play" : "Pause"}
          </button>
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-11 w-11 rounded-full border transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                index === currentIndex
                  ? "bg-gold-500 text-gold-950 border-gold-500"
                  : "bg-black/50 text-white border-white/40 hover:bg-black/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === currentIndex}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
