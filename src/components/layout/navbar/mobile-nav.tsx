// src/components/layout/navbar/mobile-nav.tsx
// ═══════════════════════════════════════════════════════════════
// MOBILE NAVIGATION
// React 19 compatible with proper effect patterns
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/constants/navigation";
import { NavbarLogo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { MagneticButton } from "@/components/common/magnetic-button";

interface MobileNavProps {
  className?: string;
  language?: "en" | "si";
}

export function MobileNav({ className, language = "en" }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(
    new Set()
  );
  const pathname = usePathname();

  // Close menu on navigation only if it's open to avoid unnecessary state updates
  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      setIsOpen(false);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname, isOpen]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleExpanded = React.useCallback((href: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  }, []);

  const drawerEasing = cubicBezier(0.76, 0, 0.24, 1);

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Hamburger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-full",
          "border border-gold-500/20 bg-gold-500/10",
          "transition-colors duration-300",
          "hover:bg-gold-500/20 hover:border-gold-500/40",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5 text-gold-600 dark:text-gold-400" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5 text-gold-600 dark:text-gold-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Slide-in drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: drawerEasing }}
            className={cn(
              "fixed right-0 top-0 h-full w-full max-w-sm",
              "bg-background/98 backdrop-blur-2xl",
              "border-l border-gold-500/20",
              "shadow-2xl",
              "z-50",
              "flex flex-col"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gold-500/10">
              <NavbarLogo size="sm" />
              <button
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-gold-500/20 bg-gold-500/10",
                  "transition-colors duration-300",
                  "hover:bg-gold-500/20"
                )}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-1" aria-label="Mobile navigation">
                {mainNavLinks.map((link, index) => {
                  const hasChildren =
                    link.children && link.children.length > 0;
                  const isExpanded = expandedItems.has(link.href);
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={() => !hasChildren && setIsOpen(false)}
                          className={cn(
                            "flex-1 flex items-center gap-3",
                            "px-4 py-3 rounded-xl",
                            "text-base font-medium",
                            "transition-colors duration-200",
                            isActive
                              ? "bg-gold-500/10 text-gold-500"
                              : "text-foreground hover:bg-gold-500/5 hover:text-gold-500"
                          )}
                        >
                          <span className={cn(language === "si" && "sinhala")}>
                            {link.label[language]}
                          </span>
                        </Link>
                        {hasChildren && (
                          <button
                            onClick={() => toggleExpanded(link.href)}
                            className={cn(
                              "p-3 rounded-xl",
                              "transition-colors duration-200",
                              "hover:bg-gold-500/10"
                            )}
                            aria-label={`Toggle ${link.label.en} submenu`}
                            aria-expanded={isExpanded}
                          >
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4 text-gold-500" />
                            </motion.div>
                          </button>
                        )}
                      </div>

                      {/* Children */}
                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 ml-4 space-y-1 border-l-2 border-gold-500/20 pl-4">
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "block px-4 py-2 rounded-lg",
                                    "text-sm",
                                    "transition-colors duration-200",
                                    "text-muted-foreground hover:text-gold-500 hover:bg-gold-500/5",
                                    language === "si" && "sinhala"
                                  )}
                                >
                                  {child.label[language]}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-around">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>

                {/* Donate button */}
                <MagneticButton
                  href="/donate"
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  🙏 Donate Now
                </MagneticButton>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gold-500/10 p-4">
              <p className="text-xs text-center text-muted-foreground">
                © 2024 Boraluketiya Buddhist Center
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}