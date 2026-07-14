// src/hooks/use-poya-date.ts
// ═══════════════════════════════════════════════════════════════
// USE POYA DATE HOOK
// Real-time countdown to next Poya day
// Fixed to prevent infinite loops
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { getNextPoyaDay, type PoyaDay } from "@/data/poya-dates";
export { poyaDates2025 } from "@/data/poya-dates";
interface PoyaCountdown {
  poya: PoyaDay | null;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
}

const INITIAL_STATE: PoyaCountdown = {
  poya: null,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isToday: false,
};

/**
 * Hook to get real-time countdown to next Poya day
 * Uses memoized poya date to prevent infinite loops
 */
export function usePoyaDate(): PoyaCountdown {
  const [countdown, setCountdown] =
    React.useState<PoyaCountdown>(INITIAL_STATE);

  // ✅ FIX: Store poya in ref to prevent recalculation
  const poyaRef = React.useRef<PoyaDay | null>(null);

  React.useEffect(() => {
    // Get poya once and store in ref
    if (!poyaRef.current) {
      poyaRef.current = getNextPoyaDay();
    }

    const nextPoya = poyaRef.current;

    if (!nextPoya) {
      return;
    }

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
      const minutes = Math.max(
        0,
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

      setCountdown({
        poya: nextPoya,
        days,
        hours,
        minutes,
        seconds,
        isToday,
      });
    };

    // Calculate immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return countdown;
}