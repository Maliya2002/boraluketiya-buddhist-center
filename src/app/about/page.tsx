// src/app/about/page.tsx
// ═══════════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { AboutSection } from "@/components/sections/about-section";
import { StatsSection } from "@/components/sections/stats-section";
import { OrganizationsSection } from "@/components/sections/organizations-section";
import { QuoteSection } from "@/components/sections/quote-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Boralukatiya Buddhist Center - a century of Buddhist heritage in Kamburupitiya, Sri Lanka.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Our Sacred Story"
        title="About Our Temple"
        description="Discover the heritage, values, and spiritual journey of Boralukatiya Buddhist Center — a beacon of Buddhist wisdom for over a century."
        breadcrumbs={[{ label: "About" }]}
        variant="large"
      />

      <AboutSection />
      <StatsSection />
      <OrganizationsSection />
      <QuoteSection />
    </main>
  );
}