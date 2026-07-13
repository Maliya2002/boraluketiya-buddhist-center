// src/components/common/theme-toggle.tsx
// ═══════════════════════════════════════════════════════════════
// THEME TOGGLE BUTTON
// Beautiful animated dark/light mode toggle
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Custom hook to check if component is mounted on client
 * Uses useSyncExternalStore to avoid React 19 warnings
 */
function useIsMounted() {
  return React.useSyncExternalStore(
    // Subscribe function (no-op since mount state doesn't change)
    () => () => {},
    // Client snapshot
    () => true,
    // Server snapshot
    () => false
  );
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    // Show placeholder to prevent layout shift
    return (
      <div
        className={cn(
          "h-10 w-10 rounded-full",
          "bg-gold-500/10 border border-gold-500/20",
          className
        )}
      />
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full",
        "border border-gold-500/20 bg-gold-500/10",
        "transition-colors duration-300",
        "hover:bg-gold-500/20 hover:border-gold-500/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5 text-gold-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5 text-gold-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}