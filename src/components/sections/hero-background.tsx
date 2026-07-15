// src/components/sections/hero-background.tsx
// ═══════════════════════════════════════════════════════════════
// HERO BACKGROUND - REAL Boralukatiya Temple Photos
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
}

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// ✅ Real Boralukatiya Buddhist Center photos
const TEMPLE_IMAGES = [
  {
    desktop: "/images/hero/temple-night.jpg",
    mobile: "/images/hero/temple-night-mobile.jpg",
    alt: "Boralukatiya Buddhist Center - Temple Entrance at Night",
  },
  {
    desktop: "/images/hero/temple-bodhi.jpg",
    mobile: "/images/hero/temple-bodhi-mobile.jpg",
    alt: "Sacred Bodhi Tree at Boralukatiya Temple",
  },
  {
    desktop: "/images/hero/temple-day.jpg",
    mobile: "/images/hero/temple-day-mobile.jpg",
    alt: "Boralukatiya Buddhist Center - Daytime View",
  },
];

export function HeroBackground({ className }: HeroBackgroundProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play slideshow
  React.useEffect(() => {
    const interval = isMobile ? 8000 : 6000;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEMPLE_IMAGES.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        "bg-gradient-to-br from-temple-900 via-gold-900/40 to-temple-800",
        className
      )}
      aria-hidden="true"
    >
      {/* Render all images, only current one visible */}
      {TEMPLE_IMAGES.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-2000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={isMobile ? image.mobile : image.desktop}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={isMobile ? 70 : 75}
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      ))}

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Slide indicators (desktop only) */}
      {!isMobile && (
        <div className="absolute bottom-20 right-8 flex flex-col gap-2 z-10">
          {TEMPLE_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-8 w-1 rounded-full transition-all duration-500",
                index === currentIndex
                  ? "bg-gold-500 h-12 shadow-gold-md"
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