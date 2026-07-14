// src/components/animations/counter.tsx
// ═══════════════════════════════════════════════════════════════
// ANIMATED COUNTER
// Number counter that animates when scrolled into view
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  separator?: string;
}

export function Counter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className,
  separator = ",",
}: CounterProps) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (!inView || hasAnimated) return;

    setHasAnimated(true);

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easedProgress = 1 - Math.pow(2, -10 * progress);

      const currentValue = Math.floor(
        startValue + (end - startValue) * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, hasAnimated]);

  // Format number with separators
  const formattedCount = count
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}