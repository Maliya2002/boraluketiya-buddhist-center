// src/components/common/theme-provider.tsx
// ═══════════════════════════════════════════════════════════════
// THEME PROVIDER
// Wraps the app to enable dark/light mode
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}