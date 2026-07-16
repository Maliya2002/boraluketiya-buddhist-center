// next.config.ts
// ═══════════════════════════════════════════════════════════════
// NEXT.JS CONFIGURATION with PWA
// ═══════════════════════════════════════════════════════════════

import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-icons",
      "date-fns",
    ],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [50, 65, 70, 75, 80, 85, 90],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1600, 1920],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default withSerwist(nextConfig);