// src/components/sections/videos-section.tsx
// ═══════════════════════════════════════════════════════════════
// VIDEOS SECTION
// Featured videos and sermons
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Video, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { VideoCard } from "@/components/ui/video-card";
import { videosList, type VideoData } from "@/data/videos-data";

interface VideosSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function VideosSection({
  className,
  language = "en",
}: VideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = React.useState<VideoData | null>(
    null
  );

  // Show only featured videos on homepage
  const displayVideos = videosList.slice(0, 6);

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Videos and sermons"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-lotus-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-4">
              <Video className="h-4 w-4 text-gold-500" />
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Videos & Sermons
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Wisdom in{" "}
              <span className="text-gradient-gold">Motion</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of dhamma sermons, guided meditations,
              and event highlights from our temple community.
            </p>
          </RevealOnScroll>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoCard
                video={video}
                language={language}
                onClick={() => setSelectedVideo(video)}
              />
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/videos"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4",
                "text-sm font-semibold rounded-full",
                "border-2 border-gold-500 text-gold-500",
                "hover:bg-gold-500 hover:text-gold-950",
                "transition-all duration-300",
                "group"
              )}
            >
              <span>View All Videos</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* YouTube embed */}
                {selectedVideo.youtubeId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title.en}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}