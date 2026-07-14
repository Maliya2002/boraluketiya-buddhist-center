// next.config.ts
// ═══════════════════════════════════════════════════════════════
// NEXT.JS 16 CONFIGURATION
// Optimized for Turbopack (default in Next.js 16)
// ═══════════════════════════════════════════════════════════════

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Turbopack configuration (Next.js 16 default)
  turbopack: {
    // Add turbopack-specific rules if needed
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Optimize package imports for faster loading
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-icons",
      "date-fns",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75, 85, 90, 95, 100],
    minimumCacheTTL: 60,
  },

  // Reduce console output in production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Performance
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;