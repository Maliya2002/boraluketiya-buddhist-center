"use client";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePoyaDate } from "@/hooks/use-poya-date";

export function PoyaCountdown({ className, language = "en" }: { className?: string; language?: "en" | "si" }) {
  const { poya, days, hours, isToday, ready } = usePoyaDate();
  const sinhala = language === "si";
  return (
    <div className={cn("glass rounded-2xl p-4 flex items-center gap-3 border border-gold-500/20 min-w-[140px]", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
        <Moon className="h-5 w-5 text-gold-500" />
      </div>
      <div className={cn("flex flex-col gap-1", sinhala && "sinhala")}>
        <span className="text-xs text-white/70">{isToday ? (sinhala ? "අද පොහොය" : "Today is Poya") : (sinhala ? "මීළඟ පොහොය" : "Next Poya")}</span>
        {!ready ? <span className="text-sm text-white/80">{sinhala ? "පූරණය වෙමින්…" : "Loading…"}</span> : poya ? (
          <>
            <span className="text-sm font-semibold text-gold-400">{poya.name[language]}</span>
            <time dateTime={poya.date} className="text-xs text-white/80">{poya.date}</time>
            {!isToday && <span className="text-sm text-white">{sinhala ? `දින ${days} පැය ${hours}` : `${days}d ${hours}h`}</span>}
          </>
        ) : <span className="text-sm text-white/80">{sinhala ? "නව පොහොය දින තවම පළ කර නැත" : "New Poya dates have not been added yet"}</span>}
      </div>
    </div>
  );
}
