// src/app/about/history/page.tsx
// ═══════════════════════════════════════════════════════════════
// TEMPLE HISTORY PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { TimelineSection } from "@/components/sections/timeline-section";
import { QuoteSection } from "@/components/sections/quote-section";

export const metadata: Metadata = {
  title: "Temple History",
  description: "Explore the rich history and timeline of Boralukatiya Buddhist Center from 1920 to present day.",
};

export default function HistoryPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Our Journey Through Time"
        title="Temple History"
        description="From humble beginnings in 1920 to a thriving spiritual community today — walk through our sacred journey."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "History" },
        ]}
        variant="large"
      />

      <TimelineSection />
      <QuoteSection />
    </main>
  );
}