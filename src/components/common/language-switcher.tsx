// src/components/common/language-switcher.tsx
// ═══════════════════════════════════════════════════════════════
// LANGUAGE SWITCHER
// Beautiful bilingual switcher (English/Sinhala)
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Language } from "@/types";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "minimal";
}

const languages: {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", flag: "🇱🇰" },
];

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = React.useState<Language>("en");
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const handleLanguageChange = (code: Language) => {
    setCurrentLang(code);
    setIsOpen(false);
    // TODO: Save to localStorage and update app language state
    localStorage.setItem("language", code);
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      {/* Trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center gap-2 rounded-full",
          "border border-gold-500/20 bg-gold-500/10",
          "px-3 py-2 h-10",
          "transition-colors duration-300",
          "hover:bg-gold-500/20 hover:border-gold-500/40",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        {variant === "default" ? (
          <>
            <Globe className="h-4 w-4 text-gold-600 dark:text-gold-400" />
            <span className="text-sm font-medium text-foreground">
              {currentLanguage?.code.toUpperCase()}
            </span>
          </>
        ) : (
          <span className="text-lg">{currentLanguage?.flag}</span>
        )}
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute right-0 top-full mt-2 min-w-[180px]",
              "rounded-2xl border border-gold-500/20",
              "bg-background/95 backdrop-blur-xl",
              "shadow-lg shadow-black/10",
              "overflow-hidden",
              "z-50"
            )}
          >
            <div className="p-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ x: 4 }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3",
                    "rounded-xl px-3 py-2.5 text-left",
                    "transition-colors duration-200",
                    "hover:bg-gold-500/10",
                    currentLang === lang.code && "bg-gold-500/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span
                        className={cn(
                          "text-xs text-muted-foreground",
                          lang.code === "si" && "sinhala"
                        )}
                      >
                        {lang.nativeName}
                      </span>
                    </div>
                  </div>
                  {currentLang === lang.code && (
                    <Check className="h-4 w-4 text-gold-500" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}