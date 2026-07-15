// src/app/page.tsx
// ═══════════════════════════════════════════════════════════════
// HOMEPAGE - Lazy loaded sections for performance
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/sections/hero-section";

// Lazy load below-the-fold sections
const AboutSection = dynamic(
  () => import("@/components/sections/about-section").then((mod) => ({ default: mod.AboutSection })),
  { ssr: true }
);

const StatsSection = dynamic(
  () => import("@/components/sections/stats-section").then((mod) => ({ default: mod.StatsSection })),
  { ssr: true }
);

const TimelineSection = dynamic(
  () => import("@/components/sections/timeline-section").then((mod) => ({ default: mod.TimelineSection })),
  { ssr: true }
);

const ChiefIncumbentSection = dynamic(
  () => import("@/components/sections/chief-incumbent-section").then((mod) => ({ default: mod.ChiefIncumbentSection })),
  { ssr: true }
);

const OrganizationsSection = dynamic(
  () => import("@/components/sections/organizations-section").then((mod) => ({ default: mod.OrganizationsSection })),
  { ssr: true }
);

const EventsSection = dynamic(
  () => import("@/components/sections/events-section").then((mod) => ({ default: mod.EventsSection })),
  { ssr: true }
);

const GallerySection = dynamic(
  () => import("@/components/sections/gallery-section").then((mod) => ({ default: mod.GallerySection })),
  { ssr: true }
);

const VideosSection = dynamic(
  () => import("@/components/sections/videos-section").then((mod) => ({ default: mod.VideosSection })),
  { ssr: true }
);

const NewsSection = dynamic(
  () => import("@/components/sections/news-section").then((mod) => ({ default: mod.NewsSection })),
  { ssr: true }
);

const QuoteSection = dynamic(
  () => import("@/components/sections/quote-section").then((mod) => ({ default: mod.QuoteSection })),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: true }
);

const NewsletterSection = dynamic(
  () => import("@/components/sections/newsletter-section").then((mod) => ({ default: mod.NewsletterSection })),
  { ssr: true }
);

const DonateCtaSection = dynamic(
  () => import("@/components/sections/donate-cta-section").then((mod) => ({ default: mod.DonateCtaSection })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero - Load immediately */}
      <HeroSection />

      {/* Lazy loaded sections */}
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <ChiefIncumbentSection />
      <OrganizationsSection />
      <EventsSection />
      <GallerySection />
      <VideosSection />
      <NewsSection />
      <QuoteSection />
      <TestimonialsSection />
      <DonateCtaSection />
      <NewsletterSection />
    </main>
  );
}