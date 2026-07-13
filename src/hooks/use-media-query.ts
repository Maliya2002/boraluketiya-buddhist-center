// src/hooks/use-media-query.ts
// ═══════════════════════════════════════════════════════════════
// USE MEDIA QUERY HOOK
// React 19 compatible using useSyncExternalStore
// ═══════════════════════════════════════════════════════════════

"use client";

import { useSyncExternalStore } from "react";

/**
 * Subscribe function factory for media queries
 * Returns a subscribe function that adds/removes event listeners
 */
function subscribeToMediaQuery(query: string) {
  return (callback: () => void) => {
    // Guard against SSR
    if (typeof window === "undefined") {
      return () => {};
    }

    const mediaQueryList = window.matchMedia(query);

    // Modern browsers use addEventListener
    mediaQueryList.addEventListener("change", callback);

    // Cleanup function
    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  };
}

/**
 * Get current match state for a media query
 * Client-side only
 */
function getMediaQuerySnapshot(query: string): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}

/**
 * Server-side snapshot (always returns false on server)
 * Prevents hydration mismatch
 */
function getServerSnapshot(): boolean {
  return false;
}

/**
 * Hook to check if a media query matches
 * Uses useSyncExternalStore for React 19 compatibility
 *
 * @param query - CSS media query string
 * @returns Whether the media query currently matches
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeToMediaQuery(query),
    () => getMediaQuerySnapshot(query),
    getServerSnapshot
  );
}

// ─────────────────────────────────────────────────────────────
// PRESET BREAKPOINTS
// Common responsive breakpoints
// ─────────────────────────────────────────────────────────────

/**
 * Check if viewport is mobile (< 768px)
 */
export const useIsMobile = () => useMediaQuery("(max-width: 767px)");

/**
 * Check if viewport is tablet (768px - 1023px)
 */
export const useIsTablet = () =>
  useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

/**
 * Check if viewport is desktop (>= 1024px)
 */
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");

/**
 * Check if viewport is large desktop (>= 1280px)
 */
export const useIsLargeDesktop = () => useMediaQuery("(min-width: 1280px)");

/**
 * Check if user prefers reduced motion (accessibility)
 */
export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

/**
 * Check if user prefers dark color scheme
 */
export const usePrefersDarkMode = () =>
  useMediaQuery("(prefers-color-scheme: dark)");