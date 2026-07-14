// src/app/gallery/page.tsx
// ═══════════════════════════════════════════════════════════════
// GALLERY PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { GallerySection } from "@/components/sections/gallery-section";
import { VideosSection } from "@/components/sections/videos-section";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  description: "Explore beautiful moments from our temple, events, and community through photos and videos.",
};

export default function GalleryPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Visual Journey"
        title="Photo & Video Gallery"
        description="A visual journey through our sacred temple, ceremonies, and community moments."
        breadcrumbs={[{ label: "Gallery" }]}
        variant="large"
      />

      <GallerySection />
      <VideosSection />
    </main>
  );
}