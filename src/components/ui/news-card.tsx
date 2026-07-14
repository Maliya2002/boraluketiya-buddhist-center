// src/components/ui/news-card.tsx
// ═══════════════════════════════════════════════════════════════
// NEWS CARD
// Article card with image and metadata
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/data/news-data";

interface NewsCardProps {
  article: NewsArticle;
  language?: "en" | "si";
  className?: string;
}

export function NewsCard({
  article,
  language = "en",
  className,
}: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    announcement: "bg-gold-500/10 text-gold-600 border-gold-500/30",
    event: "bg-lotus-500/10 text-lotus-500 border-lotus-500/30",
    dhamma: "bg-temple-500/10 text-temple-600 border-temple-500/30",
    achievement: "bg-bodhi-500/10 text-bodhi-600 border-bodhi-500/30",
    notice: "bg-dharma-500/10 text-dharma-500 border-dharma-500/30",
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative bg-card rounded-3xl overflow-hidden",
        "border border-gold-500/10 hover:border-gold-500/30",
        "shadow-soft-sm hover:shadow-soft-lg",
        "transition-all duration-500",
        className
      )}
    >
      {/* Image */}
      <Link href={`/news/${article.slug}`} className="block relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title.en}
          fill
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={article.image.startsWith("http")}
        />

        {/* Featured badge */}
        {article.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-gold-950 rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md",
              categoryColors[article.category]
            )}
          >
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/news/${article.slug}`}>
          <h3
            className={cn(
              "font-heading text-xl md:text-2xl font-medium text-foreground mb-3",
              "group-hover:text-gold-500 transition-colors duration-300",
              "line-clamp-2",
              language === "si" && "sinhala"
            )}
          >
            {article.title[language]}
          </h3>
        </Link>

        {/* Excerpt */}
        <p
          className={cn(
            "text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed",
            language === "si" && "sinhala"
          )}
        >
          {article.excerpt[language]}
        </p>

        {/* Author and read more */}
        <div className="flex items-center justify-between pt-4 border-t border-gold-500/10">
          <span className="text-xs text-muted-foreground">
            By {article.author}
          </span>

          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 hover:text-gold-600 transition-colors group/link"
          >
            <span>Read More</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}