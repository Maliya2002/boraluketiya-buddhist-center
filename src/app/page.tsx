// src/app/page.tsx
// ═══════════════════════════════════════════════════════════════
// HOMEPAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { ChiefIncumbentSection } from "@/components/sections/chief-incumbent-section";
import { OrganizationsSection } from "@/components/sections/organizations-section";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { VideosSection } from "@/components/sections/videos-section";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="relative">
      {/* Phase 3: Hero Section */}
      <HeroSection />

      {/* Phase 4: About & Story */}
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <ChiefIncumbentSection />
      <OrganizationsSection />

      {/* Phase 5: Events, Gallery, Videos */}
      <EventsSection />
      <GallerySection />
      <VideosSection />

      {/* Placeholder for next phase */}
      <section className="relative py-20 bg-background text-center">
        <p className="text-subtitle text-gold-500 mb-2">Coming Soon</p>
        <h2 className="text-h2 text-foreground">Phase 6: News, Testimonials & Footer</h2>
      </section>
    </main>
  );
}