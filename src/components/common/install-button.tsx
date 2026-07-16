// src/components/common/install-button.tsx
// ═══════════════════════════════════════════════════════════════
// INSTALL APP BUTTON
// Optional button user can click anytime to install
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface InstallButtonProps {
  className?: string;
  variant?: "default" | "gold";
}

export function InstallButton({
  className,
  variant = "gold",
}: InstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] =
    React.useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = React.useState(false);

  React.useEffect(() => {
    // Check if already installed
    if (typeof window !== "undefined") {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
        return;
      }
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert(
        "To install: Open in Chrome/Edge and use browser menu → 'Install App' or 'Add to Home Screen'"
      );
      return;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return null;
  }

  return (
    <button
      onClick={handleInstall}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full",
        "text-sm font-medium",
        "transition-all duration-200",
        "active:scale-95",
        variant === "gold"
          ? "bg-gold-500 text-gold-950 hover:bg-gold-600 hover:shadow-gold-md"
          : "bg-card border-2 border-gold-500/30 text-foreground hover:bg-gold-500/10",
        className
      )}
    >
      <Smartphone className="h-4 w-4" />
      <span>Install App</span>
    </button>
  );
}