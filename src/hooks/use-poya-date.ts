"use client";
import { useEffect, useState } from "react";
import { getPoyaCountdown } from "@/data/poya-dates";

export function usePoyaDate() {
  const [countdown, setCountdown] = useState<ReturnType<typeof getPoyaCountdown>>({
    poya: null, isToday: false, days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const update = () => { setCountdown(getPoyaCountdown()); setReady(true); };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return { ...countdown, ready };
}
