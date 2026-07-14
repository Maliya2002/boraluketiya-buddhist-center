// src/components/sections/hero-widgets.tsx
// ═══════════════════════════════════════════════════════════════
// HERO WIDGETS
// Client-only widgets container
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CurrentTime } from "@/components/widgets/current-time";
import { WeatherWidget } from "@/components/widgets/weather-widget";
import { PoyaCountdown } from "@/components/widgets/poya-countdown";

interface HeroWidgetsProps {
  language?: "en" | "si";
  className?: string;
}

export function HeroWidgets({ language, className }: HeroWidgetsProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server - avoid hydration issues
  if (!mounted) {
    return (
      <div
        className={cn(
          "mt-16 flex flex-wrap items-center justify-center gap-4",
          "max-w-3xl mx-auto",
          className
        )}
      >
        {/* Skeleton loaders */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="glass rounded-2xl p-4 flex items-center gap-3 min-w-[140px] animate-pulse"
          >
            <div className="h-10 w-10 rounded-full bg-gold-500/20" />
            <div className="space-y-1">
              <div className="h-3 w-16 rounded bg-gold-500/20" />
              <div className="h-4 w-20 rounded bg-gold-500/20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-16 flex flex-wrap items-center justify-center gap-4",
        "max-w-3xl mx-auto",
        className
      )}
      style={{
        animation: "fadeIn 0.8s ease-out forwards",
      }}
    >
      <CurrentTime />
      <WeatherWidget />
      <PoyaCountdown language={language} />
    </div>
  );
}