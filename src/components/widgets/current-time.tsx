// src/components/widgets/current-time.tsx
// ═══════════════════════════════════════════════════════════════
// CURRENT TIME WIDGET
// Simple, safe implementation
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CurrentTimeProps {
  className?: string;
}

export function CurrentTime({ className }: CurrentTimeProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateString = time.toLocaleDateString("en-US", {
    timeZone: "Asia/Colombo",
    weekday: "short",
    day: "numeric",
    month: "short",
  });

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
        <Clock className="h-5 w-5 text-gold-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-white/70">{dateString}</span>
        <span className="text-sm font-semibold text-white">{timeString}</span>
      </div>
    </div>
  );
}