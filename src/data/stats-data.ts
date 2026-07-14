// src/data/stats-data.ts
// ═══════════════════════════════════════════════════════════════
// STATISTICS DATA
// Numbers to display in stats section
// ═══════════════════════════════════════════════════════════════

export interface StatItem {
  value: number;
  suffix: string;
  label: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  icon: string;
}

export const templeStats: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    label: {
      en: "Years of Heritage",
      si: "වසර උරුමය",
    },
    description: {
      en: "A century of spiritual service",
      si: "ශතවර්ෂයක ආධ්‍යාත්මික සේවය",
    },
    icon: "🏛️",
  },
  {
    value: 500,
    suffix: "+",
    label: {
      en: "Dhamma Students",
      si: "ධර්ම ශිෂ්‍යයන්",
    },
    description: {
      en: "Learning Buddhist teachings",
      si: "බෞද්ධ ඉගැන්වීම් හදාරමින්",
    },
    icon: "📚",
  },
  {
    value: 50,
    suffix: "+",
    label: {
      en: "Annual Events",
      si: "වාර්ෂික උත්සව",
    },
    description: {
      en: "Ceremonies & gatherings",
      si: "උත්සව සහ රැස්වීම්",
    },
    icon: "🎉",
  },
  {
    value: 2568,
    suffix: "",
    label: {
      en: "Buddhist Era (BE)",
      si: "බෞද්ධ වර්ෂය",
    },
    description: {
      en: "Following the sacred calendar",
      si: "පවිත්‍ර දින දර්ශනය අනුගමනය කරමින්",
    },
    icon: "🌕",
  },
];