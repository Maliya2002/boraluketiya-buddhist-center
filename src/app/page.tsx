// src/app/page.tsx
// ═══════════════════════════════════════════════════════════════
// HOMEPAGE - Optimized for Core Web Vitals
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StatsSection } from "@/components/sections/stats-section";

// Lazy load heavy sections
const TimelineSection = dynamic(
  () => import("@/components/sections/timeline-section").then((mod) => ({ default: mod.TimelineSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const ChiefIncumbentSection = dynamic(
  () => import("@/components/sections/chief-incumbent-section").then((mod) => ({ default: mod.ChiefIncumbentSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const OrganizationsSection = dynamic(
  () => import("@/components/sections/organizations-section").then((mod) => ({ default: mod.OrganizationsSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const EventsSection = dynamic(
  () => import("@/components/sections/events-section").then((mod) => ({ default: mod.EventsSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const GallerySection = dynamic(
  () => import("@/components/sections/gallery-section").then((mod) => ({ default: mod.GallerySection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const VideosSection = dynamic(
  () => import("@/components/sections/videos-section").then((mod) => ({ default: mod.VideosSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const NewsSection = dynamic(
  () => import("@/components/sections/news-section").then((mod) => ({ default: mod.NewsSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const QuoteSection = dynamic(
  () => import("@/components/sections/quote-section").then((mod) => ({ default: mod.QuoteSection })),
  {
    loading: () => <div className="h-64" />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-96" />,
  }
);

const NewsletterSection = dynamic(
  () => import("@/components/sections/newsletter-section").then((mod) => ({ default: mod.NewsletterSection })),
  {
    loading: () => <div className="h-64" />,
  }
);

const DonateCtaSection = dynamic(
  () => import("@/components/sections/donate-cta-section").then((mod) => ({ default: mod.DonateCtaSection })),
  {
    loading: () => <div className="h-96" />,
  }
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
      {/* Above the fold - loaded immediately */}
      <HeroSection />
      <AboutSection />
      <StatsSection />

      {/* Below the fold - lazy loaded */}
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