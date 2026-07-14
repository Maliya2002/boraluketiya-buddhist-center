// src/app/about/chief-incumbent/page.tsx
// ═══════════════════════════════════════════════════════════════
// CHIEF INCUMBENT PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { ChiefIncumbentSection } from "@/components/sections/chief-incumbent-section";
import { QuoteSection } from "@/components/sections/quote-section";

export const metadata: Metadata = {
  title: "Chief Incumbent",
  description: "Meet our Chief Incumbent - the spiritual leader guiding our Buddhist community.",
};

export default function ChiefIncumbentPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Spiritual Leadership"
        title="Our Chief Incumbent"
        description="Meet the revered monk who leads our spiritual community with wisdom and compassion."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Chief Incumbent" },
        ]}
        variant="large"
      />

      <ChiefIncumbentSection />
      <QuoteSection />
    </main>
  );
}