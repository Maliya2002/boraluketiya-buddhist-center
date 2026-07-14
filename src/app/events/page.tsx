// src/app/events/page.tsx
// ═══════════════════════════════════════════════════════════════
// EVENTS LISTING PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { EventsSection } from "@/components/sections/events-section";

export const metadata: Metadata = {
  title: "Events & Ceremonies",
  description: "Upcoming Buddhist events, ceremonies, and community gatherings at Boralukatiya Buddhist Center.",
};

export default function EventsPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Sacred Gatherings"
        title="Events & Ceremonies"
        description="Join our vibrant community for Poya day celebrations, meditation retreats, and cultural events."
        breadcrumbs={[{ label: "Events" }]}
        variant="large"
      />

      <EventsSection />
    </main>
  );
}