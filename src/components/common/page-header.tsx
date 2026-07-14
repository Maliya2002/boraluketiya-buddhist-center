// src/components/common/page-header.tsx
// ═══════════════════════════════════════════════════════════════
// PAGE HEADER
// Reusable page header for all inner pages
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
  variant?: "default" | "large";
}

export function PageHeader({
  subtitle,
  title,
  description,
  breadcrumbs,
  className,
  variant = "default",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "large" ? "pt-32 pb-20 md:pt-40 md:pb-28" : "pt-28 pb-16 md:pt-32 md:pb-20",
        "bg-gradient-to-br from-gold-500/5 via-background to-temple-500/5",
        className
      )}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-temple-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-6 text-sm"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-muted-foreground hover:text-gold-500 transition-colors flex items-center gap-1"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>

              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-muted-foreground hover:text-gold-500 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-500">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-subtitle text-gold-500 mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "font-heading font-light text-foreground text-balance mb-6",
              variant === "large" ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"
            )}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4 max-w-xs mx-auto"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="text-gold-500 text-xl">❖</div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}