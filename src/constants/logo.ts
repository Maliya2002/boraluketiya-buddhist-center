// src/constants/logo.ts
// ═══════════════════════════════════════════════════════════════
// LOGO CONFIGURATION
// Central registry of all logo variants and metadata
// ═══════════════════════════════════════════════════════════════

export const LOGO_PATHS = {
  full: {
    default: "/images/logo/logo-full.png",
    webp: "/images/logo/logo-full.webp",
  },
  white: {
    default: "/images/logo/logo-white.png",
  },
  icon: {
    default: "/images/logo/logo-icon.png",
  },
} as const;

export const FAVICON_PATHS = {
  ico: "/favicon.ico",
  png16: "/images/icons/favicon-16x16.png",
  png32: "/images/icons/favicon-32x32.png",
  appleTouchIcon: "/images/icons/apple-touch-icon.png",
} as const;

export const LOGO_META = {
  aspectRatio: 1,
  originalWidth: 1024,
  originalHeight: 1024,
  altText: {
    en: "Boraluketiya Buddhist Center Official Logo",
    si: "බොරලුකෙටිය බෞද්ධ මධ්‍යස්ථානයේ නිල ලාංඡනය",
  },
  shortAltText: {
    en: "Boraluketiya Buddhist Center",
    si: "බොරලුකෙටිය බෞද්ධ මධ්‍යස්ථානය",
  },
} as const;

export const LOGO_SIZES = {
  xs: 32,
  sm: 48,
  md: 64,
  lg: 96,
  xl: 128,
  "2xl": 200,
  "3xl": 300,
} as const;

export type LogoSize = keyof typeof LOGO_SIZES;
export type LogoVariant = keyof typeof LOGO_PATHS;