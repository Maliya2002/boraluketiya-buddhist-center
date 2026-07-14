// src/components/ui/gallery-image.tsx
// ═══════════════════════════════════════════════════════════════
// GALLERY IMAGE
// Image card with hover effects and click to open lightbox
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage as GalleryImageType } from "@/data/gallery-data";

interface GalleryImageProps {
  image: GalleryImageType;
  language?: "en" | "si";
  onClick?: () => void;
  className?: string;
}

export function GalleryImage({
  image,
  language = "en",
  onClick,
  className,
}: GalleryImageProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl",
        "bg-muted",
        "cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4",
        className
      )}
      style={{
        aspectRatio: `${image.width} / ${image.height}`,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        quality={85}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized={image.src.startsWith("http")}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
        <Maximize2 className="h-4 w-4 text-foreground" />
      </div>

      {/* Title on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <h3
          className={cn(
            "text-white font-heading text-lg font-medium",
            language === "si" && "sinhala"
          )}
        >
          {image.title[language]}
        </h3>
      </div>

      {/* Gold corner accent */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/80 rounded-tl-xl transition-all duration-500" />
    </motion.button>
  );
}