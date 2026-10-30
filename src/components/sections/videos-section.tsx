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
  showViewAll?: boolean;
}

export function VideosSection({
  className,
  language = "en",
  showViewAll = true,
}: VideosSectionProps) {
  const [selectedVideo, setSelectedVideo] = React.useState<VideoData | null>(
    null
  );

  // Show only featured videos on homepage
  const displayVideos = videosList.filter((video) => /^[A-Za-z0-9_-]{11}$/.test(video.youtubeId ?? "")).slice(0, 6);

  return (
    <section
      id="videos"
      className={cn(
        "relative scroll-mt-24 py-20 md:py-28 lg:py-32 overflow-hidden",
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
              {displayVideos.length > 0
                ? "Dhamma sermons and event recordings from our temple community."
                : language === "si"
                  ? "දැනට නැරඹිය හැකි වීඩියෝ නොමැත. අපගේ විහාරයේ සහ ප්‍රජා වැඩසටහන්වල ඡායාරූප නරඹන්න."
                  : "No videos are available here yet. Explore photographs from our temple and community programmes."}
            </p>
          </RevealOnScroll>
        </div>

        {displayVideos.length === 0 && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-500/10 to-card p-8 text-center md:p-12">
            <Video className="mx-auto mb-5 h-10 w-10 text-gold-500" aria-hidden="true" />
            <h3 className={cn("font-heading text-2xl text-foreground", language === "si" && "sinhala")}>
              {language === "si" ? "ඡායාරූප තුළින් අප හා එක්වන්න" : "Moments from our community"}
            </h3>
            <Link href="/gallery#photos" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-gold-950 hover:bg-gold-600">
              {language === "si" ? "ඡායාරූප නරඹන්න" : "Explore our photo gallery"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}

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
          <a href="https://www.facebook.com/share/v/1AHZXctTgK/" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl border border-gold-500/20 bg-card shadow-soft-sm transition-colors hover:border-gold-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500">
            <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#1877F2]/20 via-temple-900 to-gold-900/30">
              <Video className="h-12 w-12 text-gold-500" aria-hidden="true" />
              <span className="rounded-full border border-white/20 px-4 py-1 text-sm text-white">Facebook Video</span>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-medium text-foreground">{language === "si" ? "අපගේ Facebook පිටුවෙන්" : "From our Facebook page"}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Boraluketiya Buddhist Center</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400">Watch on Facebook <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </div>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://www.youtube.com/watch?v=-7y6JDv4xvc" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gold-500/40 px-6 py-3 text-gold-600 dark:text-gold-400 hover:bg-gold-500/10">
            Watch on YouTube
          </a>
        </div>
        {/* View all */}
        {showViewAll && displayVideos.length > 0 && (
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/gallery#videos"
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

        )}

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
