// src/components/layout/navbar/mobile-nav.tsx
// ═══════════════════════════════════════════════════════════════
// MOBILE NAVIGATION - Fixed for smooth performance
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/constants/navigation";
import { NavbarLogo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";

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

  // Close menu on route change
  React.useEffect(() => {
    setIsOpen(false);
    setExpandedItems(new Set());
  }, [pathname]);

  // Lock body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Hamburger Button - FIXED with higher z-index */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-full",
          "border border-gold-500/20 bg-gold-500/10",
          "hover:bg-gold-500/20 active:bg-gold-500/30",
          "transition-colors duration-200",
          "touch-manipulation",
          "z-[9999]"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
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
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 z-[9990]"
            style={{ backdropFilter: "blur(4px)" }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.32, 0.72, 0, 1],
            }}
            className={cn(
              "fixed right-0 top-0 h-full w-[85%] max-w-sm",
              "bg-background border-l border-gold-500/20",
              "shadow-2xl z-[9995]",
              "flex flex-col",
              "overflow-hidden"
            )}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gold-500/10 shrink-0">
              <NavbarLogo size="sm" />
              <button
                type="button"
                onClick={handleClose}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full",
                  "border border-gold-500/20 bg-gold-500/10",
                  "hover:bg-gold-500/20 active:bg-gold-500/30",
                  "transition-colors duration-200",
                  "touch-manipulation"
                )}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              </button>
            </div>

            {/* Nav Links - Scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <nav
                className="p-4 space-y-1"
                aria-label="Mobile navigation"
              >
                {mainNavLinks.map((link) => {
                  const hasChildren = link.children && link.children.length > 0;
                  const isExpanded = expandedItems.has(link.href);
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <div key={link.href}>
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={hasChildren ? undefined : handleClose}
                          className={cn(
                            "flex-1 px-4 py-3 rounded-xl",
                            "text-base font-medium",
                            "transition-colors duration-150",
                            "touch-manipulation",
                            isActive
                              ? "bg-gold-500/15 text-gold-500"
                              : "text-foreground hover:bg-gold-500/5 active:bg-gold-500/10"
                          )}
                        >
                          <span className={cn(language === "si" && "sinhala")}>
                            {link.label[language]}
                          </span>
                        </Link>

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleExpanded(link.href)}
                            className={cn(
                              "p-3 rounded-xl",
                              "hover:bg-gold-500/10 active:bg-gold-500/20",
                              "transition-colors duration-150",
                              "touch-manipulation"
                            )}
                            aria-label={`Toggle ${link.label.en} submenu`}
                            aria-expanded={isExpanded}
                          >
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-4 w-4 text-gold-500" />
                            </motion.div>
                          </button>
                        )}
                      </div>

                      {/* Submenu */}
                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 ml-4 space-y-1 border-l-2 border-gold-500/20 pl-4">
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={handleClose}
                                  className={cn(
                                    "block px-4 py-2.5 rounded-lg",
                                    "text-sm",
                                    "transition-colors duration-150",
                                    "text-muted-foreground",
                                    "hover:text-gold-500 hover:bg-gold-500/5",
                                    "active:bg-gold-500/10",
                                    "touch-manipulation",
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
                    </div>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

              {/* Actions */}
              <div className="px-4 pb-4 space-y-4">
                <div className="flex items-center justify-around">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>

                {/* Donate Button */}
                <Link
                  href="/donate"
                  onClick={handleClose}
                  className={cn(
                    "flex items-center justify-center gap-2",
                    "w-full px-6 py-3 rounded-full",
                    "bg-gradient-to-r from-gold-500 to-gold-600",
                    "text-gold-950 font-semibold",
                    "shadow-gold-md hover:shadow-gold-lg",
                    "active:scale-95",
                    "transition-all duration-200",
                    "touch-manipulation"
                  )}
                >
                  🙏 Donate Now
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gold-500/10 p-4 shrink-0">
              <p className="text-xs text-center text-muted-foreground">
                © 2024 Boralukatiya Buddhist Center
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}