// next.config.ts
// ═══════════════════════════════════════════════════════════════
// NEXT.JS CONFIGURATION
// ═══════════════════════════════════════════════════════════════

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
    formats: ["image/avif", "image/webp"],
    // ✅ FIXED: Allow multiple quality settings
    qualities: [50, 75, 85, 90, 95, 100],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;