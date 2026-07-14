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

// ✅ Using Unsplash images temporarily (until you add your own)
const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552083375-1447ce886485?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531938716357-224c16b0286c?w=1920&q=80&auto=format&fit=crop",
];

export function HeroBackground({
  images = DEFAULT_IMAGES,
  autoPlayInterval = 7000,
  className,
}: HeroBackgroundProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-play slideshow
  React.useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        // ✅ Fallback gradient in case images fail
        "bg-gradient-to-br from-temple-900 via-gold-900/40 to-temple-800",
        className
      )}
      aria-hidden="true"
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
        <div className="absolute bottom-20 right-8 flex flex-col gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-8 w-1 rounded-full transition-all duration-500",
                index === currentIndex
                  ? "bg-gold-500 h-12"
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}