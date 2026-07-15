// src/components/layout/navbar/navbar.tsx
// ═══════════════════════════════════════════════════════════════
// PREMIUM NAVBAR - Optimized (no Framer Motion)
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { NavbarLogo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";
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
      {/* Spacer */}
      <div className="h-20" aria-hidden="true" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-gold-500/10 shadow-lg shadow-black/5"
            : "bg-transparent",
          className
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              "flex items-center justify-between",
              "transition-all duration-300",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <div className="flex items-center">
              <NavbarLogo
                size={isScrolled ? "sm" : "md"}
                showText={false}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <DesktopNav language={language} />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              {/* Donate Button */}
              <div className="hidden sm:block">
                <Link
                  href="/donate"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-2.5 rounded-full",
                    "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950",
                    "font-semibold text-sm",
                    "hover:shadow-gold-md active:scale-95",
                    "transition-all duration-200"
                  )}
                >
                  🙏 Donate
                </Link>
              </div>

              <MobileNav language={language} />
            </div>
          </div>
        </div>

        {/* Decorative gold line at bottom */}
        {isAtTop && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        )}
      </header>
    </>
  );
}