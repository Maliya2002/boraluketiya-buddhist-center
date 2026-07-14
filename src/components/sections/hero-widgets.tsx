// src/components/sections/hero-widgets.tsx
// ═══════════════════════════════════════════════════════════════
// HERO WIDGETS
// Client-only component for live widgets
// Uses dynamic import to prevent hydration issues
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// ✅ Dynamic imports with SSR disabled
const CurrentTime = dynamic(
  () => import("@/components/widgets/current-time").then((mod) => mod.CurrentTime),
  {
    ssr: false,
    loading: () => <WidgetSkeleton />,
  }
);

const WeatherWidget = dynamic(
  () => import("@/components/widgets/weather-widget").then((mod) => mod.WeatherWidget),
  {
    ssr: false,
    loading: () => <WidgetSkeleton />,
  }
);

const PoyaCountdown = dynamic(
  () => import("@/components/widgets/poya-countdown").then((mod) => mod.PoyaCountdown),
  {
    ssr: false,
    loading: () => <WidgetSkeleton />,
  }
);

interface HeroWidgetsProps {
  language?: "en" | "si";
  className?: string;
}

function WidgetSkeleton() {
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-3 min-w-[140px] animate-pulse">
      <div className="h-10 w-10 rounded-full bg-gold-500/20" />
      <div className="space-y-1">
        <div className="h-3 w-16 rounded bg-gold-500/20" />
        <div className="h-4 w-20 rounded bg-gold-500/20" />
      </div>
    </div>
  );
}

export function HeroWidgets({ language, className }: HeroWidgetsProps) {
  return (
    <div
      className={cn(
        "mt-16 flex flex-wrap items-center justify-center gap-4",
        "max-w-3xl mx-auto",
        "opacity-0 animate-fade-in-delayed",
        className
      )}
      style={{
        animation: "fadeIn 0.8s ease-out 2.8s forwards",
      }}
    >
      <CurrentTime />
      <WeatherWidget />
      <PoyaCountdown language={language} />
    </div>
  );
}