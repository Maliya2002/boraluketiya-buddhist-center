// src/components/sections/gallery-section.tsx
// ═══════════════════════════════════════════════════════════════
// GALLERY SECTION
// Photo gallery with masonry layout and lightbox
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { GalleryImage } from "@/components/ui/gallery-image";
import {
  galleryImages,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery-data";

interface GallerySectionProps {
  className?: string;
  language?: "en" | "si";
}

export function GallerySection({
  className,
  language = "en",
}: GallerySectionProps) {
  const [activeCategory, setActiveCategory] =
    React.useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  // Filter images
  const filteredImages = React.useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Prepare lightbox slides
  const lightboxSlides = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
    title: img.title[language],
  }));

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        "bg-gradient-to-b from-transparent via-gold-500/5 to-transparent",
        className
      )}
      aria-label="Photo gallery"
    >
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-4">
              <Camera className="h-4 w-4 text-gold-500" />
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Photo Gallery
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Moments of{" "}
              <span className="text-gradient-gold">Sacred Beauty</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our temple, events, and community —
              capturing moments of peace, devotion, and celebration.
            </p>
          </RevealOnScroll>
        </div>

        {/* Category filters */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  setActiveCategory(category.value as GalleryCategory)
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

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <GalleryImage
                  image={image}
                  language={language}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No photos in this category yet.
            </p>
          </div>
        )}

        {/* View all button */}
        {filteredImages.length > 0 && (
          <RevealOnScroll direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4",
                  "text-sm font-semibold rounded-full",
                  "border-2 border-gold-500 text-gold-500",
                  "hover:bg-gold-500 hover:text-gold-950",
                  "transition-all duration-300",
                  "group"
                )}
              >
                <span>View Full Gallery</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px)",
            },
          }}
        />
      </div>
    </section>
  );
}