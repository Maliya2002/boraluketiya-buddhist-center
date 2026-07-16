// src/app/layout.tsx
// ═══════════════════════════════════════════════════════════════
// ROOT LAYOUT - Performance optimized
// ═══════════════════════════════════════════════════════════════

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/constants/site-config";
import { ThemeProvider } from "@/components/common/theme-provider";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { BackToTop } from "@/components/common/back-to-top";
import { PWAInstallPrompt } from "@/components/common/pwa-install-prompt";
// ONLY load Inter for now - single font for performance
// Other fonts loaded on-demand via CSS
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0E0A" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <head>
  {/* Preload critical images */}
  <link
    rel="preload"
    href="/images/hero/temple-night-mobile.jpg"
    as="image"
    type="image/jpeg"
    media="(max-width: 768px)"
    fetchPriority="high"
  />
  <link
    rel="preload"
    href="/images/hero/temple-night.jpg"
    as="image"
    type="image/jpeg"
    media="(min-width: 769px)"
    fetchPriority="high"
  />

  {/* DNS Prefetch */}
  <link rel="dns-prefetch" href="https://res.cloudinary.com" />

  {/* PWA Manifest */}
  <link rel="manifest" href="/manifest.json" />

  {/* iOS PWA Support */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Boralukatiya" />
  <link
    rel="apple-touch-icon"
    href="/icons/icon-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="/icons/icon-152x152.png"
    sizes="152x152"
  />
  <link
    rel="apple-touch-icon"
    href="/icons/icon-144x144.png"
    sizes="144x144"
  />

  {/* Windows PWA */}
  <meta name="msapplication-TileColor" content="#D4AF37" />
  <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />

  {/* Theme color */}
  <meta name="theme-color" content="#D4AF37" />
  <meta name="color-scheme" content="light dark" />

  {/* Format detection */}
  <meta name="format-detection" content="telephone=no" />

  {/* Mobile web app */}
  <meta name="mobile-web-app-capable" content="yes" />
</head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function setVH() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }
              setVH();
              window.addEventListener('resize', setVH);
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </SmoothScroll>
          <PWAInstallPrompt />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}