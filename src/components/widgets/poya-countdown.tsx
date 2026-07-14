// src/components/widgets/poya-countdown.tsx
// ═══════════════════════════════════════════════════════════════
// POYA COUNTDOWN WIDGET
// Simple, safe implementation
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { poyaDates2025, type PoyaDay } from "@/data/poya-dates";

interface PoyaCountdownProps {
  className?: string;
  language?: "en" | "si";
}

interface Countdown {
  days: number;
  hours: number;
  isToday: boolean;
}

export function PoyaCountdown({
  className,
  language = "en",
}: PoyaCountdownProps) {
  // ✅ Calculate poya only once with useMemo
  const nextPoya = React.useMemo<PoyaDay | null>(() => {
    const now = new Date();
    const upcoming = poyaDates2025
      .filter((poya) => new Date(poya.date) > now)
      .sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    return upcoming[0] || null;
  }, []); // Empty deps - calculate once on mount

  const [countdown, setCountdown] = React.useState<Countdown>({
    days: 0,
    hours: 0,
    isToday: false,
  });

  React.useEffect(() => {
    if (!nextPoya) return;

    const updateCountdown = () => {
      const now = new Date();
      const poyaDate = new Date(nextPoya.date);
      const diff = poyaDate.getTime() - now.getTime();

      const isToday =
        now.getFullYear() === poyaDate.getFullYear() &&
        now.getMonth() === poyaDate.getMonth() &&
        now.getDate() === poyaDate.getDate();

      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = Math.max(
        0,
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );

      setCountdown({ days, hours, isToday });
    };

    updateCountdown();
    // Update every minute (not every second - saves performance)
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, [nextPoya]);

  if (!nextPoya) {
    return null;
  }

  return (
    <div
      className={cn(
        "glass rounded-2xl p-4",
        "flex items-center gap-3",
        "border border-gold-500/20",
        "min-w-[140px]",
        className
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
        <Moon className="h-5 w-5 text-gold-500" />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xs text-white/70",
            language === "si" && "sinhala"
          )}
        >
          {countdown.isToday ? "Today" : "Next Poya"}
        </span>
        <span
          className={cn(
            "text-sm font-semibold text-white",
            language === "si" && "sinhala"
          )}
        >
          {countdown.isToday ? (
            <span className="text-gold-400">🌕 {nextPoya.name[language]}</span>
          ) : (
            <>
              {countdown.days}d {countdown.hours}h
            </>
          )}
        </span>
      </div>
    </div>
  );
}