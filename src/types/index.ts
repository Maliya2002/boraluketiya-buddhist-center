// src/types/index.ts
// ═══════════════════════════════════════════════════════════════
// GLOBAL TYPE DEFINITIONS
// Shared TypeScript types across the application
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// LANGUAGE TYPES
// ─────────────────────────────────────────────────────────────
export type Language = "en" | "si";

export interface BilingualString {
  en: string;
  si: string;
}

// ─────────────────────────────────────────────────────────────
// THEME TYPES
// ─────────────────────────────────────────────────────────────
export type Theme = "light" | "dark" | "system";

// ─────────────────────────────────────────────────────────────
// NAVIGATION TYPES
// ─────────────────────────────────────────────────────────────
export interface NavLink {
  href: string;
  label: BilingualString;
  icon?: string;
  badge?: string;
  children?: NavLink[];
  isExternal?: boolean;
  isHighlighted?: boolean;
  description?: BilingualString;
}

export interface MegaMenuSection {
  title: BilingualString;
  links: NavLink[];
}