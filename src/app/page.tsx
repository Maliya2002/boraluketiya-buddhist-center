// src/app/page.tsx
// ═══════════════════════════════════════════════════════════════
// HOMEPAGE - Complete with all sections
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
import { NewsSection } from "@/components/sections/news-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { DonateCtaSection } from "@/components/sections/donate-cta-section";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="relative">
      {/* Phase 3: Hero */}
      <HeroSection />

      {/* Phase 4: About */}
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <ChiefIncumbentSection />
      <OrganizationsSection />

      {/* Phase 5: Events, Gallery, Videos */}
      <EventsSection />
      <GallerySection />
      <VideosSection />

      {/* Phase 6: News, Quote, Testimonials, Newsletter, CTA */}
      <NewsSection />
      <QuoteSection />
      <TestimonialsSection />
      <DonateCtaSection />
      <NewsletterSection />
    </main>
  );
}