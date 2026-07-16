// src/app/~offline/page.tsx
// ═══════════════════════════════════════════════════════════════
// OFFLINE PAGE
// Shown when user is offline
// ═══════════════════════════════════════════════════════════════

"use client";

import Link from "next/link";
import { WifiOff, Home, RefreshCw } from "lucide-react";

export default function OfflinePage() {
  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gold-500/5 via-background to-temple-500/5">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
          <WifiOff className="h-12 w-12 text-gold-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-4">
          You're <span className="text-gradient-gold">Offline</span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          It looks like you've lost your internet connection. Please check your
          network and try again.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleRetry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950 font-semibold hover:shadow-gold-md active:scale-95 transition-all duration-200"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold-500/30 text-foreground font-semibold hover:bg-gold-500/10 transition-all duration-200"
          >
            <Home className="h-4 w-4" />
            <span>Go Home</span>
          </Link>
        </div>

        {/* Buddhist quote */}
        <div className="mt-12 p-6 rounded-2xl bg-gold-500/5 border border-gold-500/20">
          <p className="text-sm italic text-muted-foreground">
            "Peace comes from within. Do not seek it without."
          </p>
          <p className="text-xs text-gold-500 mt-2">— Buddha</p>
        </div>
      </div>
    </main>
  );
}