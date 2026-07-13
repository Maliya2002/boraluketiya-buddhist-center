// src/components/layout/navbar/mega-menu.tsx
// ═══════════════════════════════════════════════════════════════
// MEGA MENU
// Beautiful dropdown menu with descriptions
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface MegaMenuProps {
  isOpen: boolean;
  parentLink: NavLink;
  language?: "en" | "si";
  onClose?: () => void;
}

export function MegaMenu({
  isOpen,
  parentLink,
  language = "en",
  onClose,
}: MegaMenuProps) {
  if (!parentLink.children || parentLink.children.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute left-1/2 top-full -translate-x-1/2 mt-3",
            "min-w-[420px] rounded-2xl",
            "border border-gold-500/20",
            "bg-background/95 backdrop-blur-xl",
            "shadow-xl shadow-black/10",
            "overflow-hidden",
            "z-50"
          )}
        >
          {/* Decorative gradient at top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          <div className="p-4">
            {/* Section title */}
            <div className="mb-3 px-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
                {parentLink.label[language]}
              </p>
            </div>

            {/* Menu items */}
            <div className="grid gap-1">
              {parentLink.children.map((child, index) => (
                <motion.div
                  key={child.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={child.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-start gap-3",
                      "rounded-xl p-3",
                      "transition-all duration-200",
                      "hover:bg-gold-500/10"
                    )}
                  >
                    {/* Icon placeholder (can add icons later) */}
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-gold-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            "text-sm font-medium text-foreground",
                            "group-hover:text-gold-500 transition-colors",
                            language === "si" && "sinhala"
                          )}
                        >
                          {child.label[language]}
                        </span>
                        <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      {child.description && (
                        <p
                          className={cn(
                            "mt-0.5 text-xs text-muted-foreground",
                            language === "si" && "sinhala"
                          )}
                        >
                          {child.description[language]}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}