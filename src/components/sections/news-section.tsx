// src/components/sections/news-section.tsx
// ═══════════════════════════════════════════════════════════════
// NEWS SECTION
// Latest news articles
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { NewsCard } from "@/components/ui/news-card";
import { newsArticles } from "@/data/news-data";

interface NewsSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function NewsSection({
  className,
  language = "en",
}: NewsSectionProps) {
  const displayArticles = newsArticles.slice(0, 4);

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Latest news"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/10 mb-4">
              <Newspaper className="h-4 w-4 text-gold-500" />
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Latest News
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Stay <span className="text-gradient-gold">Connected</span> With Us
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Latest updates, announcements, and stories from our temple
              community.
            </p>
          </RevealOnScroll>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard article={article} language={language} />
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/news"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4",
                "text-sm font-semibold rounded-full",
                "border-2 border-gold-500 text-gold-500",
                "hover:bg-gold-500 hover:text-gold-950",
                "transition-all duration-300",
                "group"
              )}
            >
              <span>View All News</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}