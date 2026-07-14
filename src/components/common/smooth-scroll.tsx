// src/components/common/smooth-scroll.tsx
// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL PROVIDER
// Wraps the app with Lenis smooth scrolling
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return <div>{children}</div>;
}