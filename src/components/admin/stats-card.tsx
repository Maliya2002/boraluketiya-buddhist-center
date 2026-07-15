// src/components/admin/stats-card.tsx
// ═══════════════════════════════════════════════════════════════
// STATS CARD - Dashboard metric card
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  color?: "gold" | "temple" | "bodhi" | "lotus";
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  color = "gold",
}: StatsCardProps) {
  const colorClasses = {
    gold: "from-gold-500/10 to-gold-500/5 border-gold-500/20 text-gold-500",
    temple: "from-temple-500/10 to-temple-500/5 border-temple-500/20 text-temple-500",
    bodhi: "from-bodhi-500/10 to-bodhi-500/5 border-bodhi-500/20 text-bodhi-500",
    lotus: "from-lotus-500/10 to-lotus-500/5 border-lotus-500/20 text-lotus-500",
  };

  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-gradient-to-br",
        "border-2",
        colorClasses[color]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        {trend && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-semibold",
              trend.value > 0 ? "text-bodhi-500" : "text-red-500"
            )}
          >
            {trend.value > 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>

      <div>
        <p className="text-3xl font-heading font-bold text-foreground mb-1">
          {value}
        </p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}