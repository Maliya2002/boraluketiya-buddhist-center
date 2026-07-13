// src/components/layout/navbar/navbar.tsx
// ═══════════════════════════════════════════════════════════════
// MAIN NAVBAR
// The premium navbar that ties everything together
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { NavbarLogo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { MagneticButton } from "@/components/common/magnetic-button";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { isScrolled, isAtTop } = useScroll(50);
  const [language] = React.useState<"en" | "si">("en");

  return (
    <>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" aria-hidden="true" />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-gold-500/10 shadow-lg shadow-black/5"
            : "bg-transparent",
          className
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              "flex items-center justify-between",
              "transition-all duration-500",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center"
            >
              <NavbarLogo
                size={isScrolled ? "sm" : "md"}
                showText={false}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:flex"
            >
              <DesktopNav language={language} />
            </motion.div>

            {/* Right actions */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-2 md:gap-3"
            >
              {/* Desktop actions */}
              <div className="hidden md:flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              {/* Donate button (visible on tablet+) */}
              <div className="hidden sm:block">
                <MagneticButton
                  href="/donate"
                  variant="gold"
                  size="sm"
                >
                  🙏 Donate
                </MagneticButton>
              </div>

              {/* Mobile navigation */}
              <MobileNav language={language} />
            </motion.div>
          </div>
        </div>

        {/* Decorative gold line at bottom (only when at top) */}
        {isAtTop && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          />
        )}
      </motion.header>
    </>
  );
}