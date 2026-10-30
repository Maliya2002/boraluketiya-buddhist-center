"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage as GalleryImageType } from "@/data/gallery-data";

interface GalleryImageProps {
  image: GalleryImageType;
  language?: "en" | "si";
  onClick?: () => void;
  className?: string;
}

export function GalleryImage({ image, language = "en", onClick, className }: GalleryImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={language === "si" ? image.title.si + " — විශාල කර බලන්න" : "View photo: " + image.title.en}
      className={cn(
        "group w-full overflow-hidden rounded-2xl border border-gold-500/20 bg-background text-left shadow-sm transition-shadow hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4",
        className
      )}
    >
      <span className="relative block overflow-hidden" style={{ aspectRatio: image.width + " / " + image.height }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={85}
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white">
          <Maximize2 className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
      <span className="block p-4">
        {(image.date || image.year) && (
          <span className="mb-1 block text-xs font-semibold text-gold-600 dark:text-gold-400">
            {image.date ? (language === "si" ? "2026 ජනවාරි 1" : "1 January 2026") : image.year}
          </span>
        )}
        <span className={cn("block font-heading text-lg font-medium text-foreground", language === "si" && "sinhala")}>
          {image.title[language]}
        </span>
      </span>
    </button>
  );
}
