// src/components/common/pwa-install-prompt.tsx
// ═══════════════════════════════════════════════════════════════
// PWA INSTALL PROMPT
// Shows install button when app is installable
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    React.useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    // Check if user previously dismissed
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      const daysSince = (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
      // Show again after 7 days
      if (daysSince < 7) {
        setIsDismissed(true);
        return;
      }
    }

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 30 seconds
      setTimeout(() => {
        setIsVisible(true);
      }, 30000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsDismissed(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installed");
    }

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("pwa-install-dismissed", new Date().toISOString());
  };

  if (isDismissed || !isVisible || !deferredPrompt) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50",
        "p-4 rounded-2xl",
        "bg-card border-2 border-gold-500/30",
        "shadow-2xl shadow-gold-500/20",
        "backdrop-blur-lg"
      )}
      style={{
        animation: "slideUp 0.4s ease-out",
      }}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
          <Download className="h-6 w-6 text-gold-950" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
            Install App
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Install Boralukatiya on your device for quick access, offline
            support, and notifications.
          </p>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className={cn(
                "flex-1 px-4 py-2 rounded-full",
                "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950",
                "font-semibold text-sm",
                "hover:shadow-gold-md active:scale-95",
                "transition-all duration-200"
              )}
            >
              Install Now
            </button>
            <button
              onClick={handleDismiss}
              className={cn(
                "px-4 py-2 rounded-full",
                "border-2 border-gold-500/30 text-foreground",
                "font-medium text-sm",
                "hover:bg-gold-500/10",
                "transition-all duration-200"
              )}
            >
              Later
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="p-1 rounded-lg hover:bg-gold-500/10 transition-colors flex-shrink-0"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}