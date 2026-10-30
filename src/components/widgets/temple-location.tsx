import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

export function TempleLocation({ className, language = "en" }: { className?: string; language?: "en" | "si" }) {
  return (
    <a
      href={siteConfig.location.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("glass flex min-w-[140px] items-center gap-3 rounded-2xl border border-gold-500/20 p-4 transition-colors hover:bg-gold-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500", className)}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
        <MapPin className="h-5 w-5 text-gold-500" aria-hidden="true" />
      </span>
      <span className={cn("flex flex-col", language === "si" && "sinhala")}>
        <span className="text-xs text-white/70">{language === "si" ? "කඹුරුපිටිය" : siteConfig.location.city}</span>
        <span className="text-sm font-semibold text-white">{language === "si" ? "සිතියමෙන් බලන්න" : "Find our temple"}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-gold-500" aria-hidden="true" />
    </a>
  );
}
