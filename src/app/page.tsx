import type { Metadata } from "next";
import { siteConfig, type Organization } from "@/constants/site-config";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-temple-500/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div
            className="animate-breathe text-8xl"
            role="img"
            aria-label="Lotus flower"
          >
            🌸
          </div>

          <div className="space-y-3">
            <p className="text-subtitle text-gold-500">
              A SACRED PLACE OF PEACE & WISDOM
            </p>
            <h1 className="text-h1 text-balance text-gradient-gold">
              {siteConfig.name}
            </h1>
            <p className="sinhala text-2xl text-muted-foreground md:text-3xl">
              {siteConfig.nameSinhala}
            </p>
          </div>

          <div className="mx-auto flex max-w-sm items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="text-2xl text-gold-500">❖</div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <p className="text-body mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            {siteConfig.tagline} — A sanctuary of peace, wisdom, and compassion
            in the heart of Kamburupitiya, Sri Lanka.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-cream-100 px-4 py-2">
            <span className="text-gold-500">📍</span>
            <span className="text-sm text-foreground">
              {siteConfig.location.address}
            </span>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-2">
              <div className="h-2 w-2 animate-ping-slow rounded-full bg-bodhi-500" />
              <span className="text-sm font-medium text-gold-600">
                Phase 1 Complete — Foundation Ready
              </span>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {Object.entries(siteConfig.organizations).map(([key, org]) => (
              <div
                key={key}
                className="glass group space-y-3 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105"
              >
                <div
                  className="mx-auto h-4 w-4 rounded-full shadow-lg"
                  style={{
                    backgroundColor: org.color,
                    boxShadow: `0 0 20px ${org.color}40`,
                  }}
                />
                <h3 className="font-heading text-sm font-medium text-foreground transition-colors group-hover:text-gold-500">
                  {org.name}
                </h3>
                <p className="sinhala text-xs text-muted-foreground">
                  {org.nameSinhala}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}