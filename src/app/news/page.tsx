// src/app/news/page.tsx
// ═══════════════════════════════════════════════════════════════
// NEWS PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { NewsSection } from "@/components/sections/news-section";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "Latest news, announcements, and updates from Boralukatiya Buddhist Center.",
};

export default function NewsPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Latest Updates"
        title="News & Announcements"
        description="Stay informed with the latest news, announcements, and stories from our temple community."
        breadcrumbs={[{ label: "News" }]}
        variant="large"
      />

      <NewsSection />
    </main>
  );
}