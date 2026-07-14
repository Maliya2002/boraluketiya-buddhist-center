// src/components/widgets/weather-widget.tsx
// ═══════════════════════════════════════════════════════════════
// WEATHER WIDGET
// Simple static weather display
// ═══════════════════════════════════════════════════════════════

"use client";

import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherWidgetProps {
  className?: string;
}

export function WeatherWidget({ className }: WeatherWidgetProps) {
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
        <Sun className="h-5 w-5 text-gold-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-white/70">Kamburupitiya</span>
        <span className="text-sm font-semibold text-white">28°C · Sunny</span>
      </div>
    </div>
  );
}