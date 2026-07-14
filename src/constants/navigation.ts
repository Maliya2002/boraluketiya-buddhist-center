// src/constants/navigation.ts
// ═══════════════════════════════════════════════════════════════
// NAVIGATION LINKS CONFIGURATION
// Single source of truth for all navigation
// ═══════════════════════════════════════════════════════════════

import type { NavLink } from "@/types";

// ─────────────────────────────────────────────────────────────
// MAIN NAVIGATION LINKS
// ─────────────────────────────────────────────────────────────
export const mainNavLinks: NavLink[] = [
  {
    href: "/",
    label: {
      en: "Home",
      si: "මුල් පිටුව",
    },
  },
  {
    href: "/about",
    label: {
      en: "About",
      si: "අපි ගැන",
    },
    children: [
      {
        href: "/about",
        label: {
          en: "About the Temple",
          si: "විහාරය ගැන",
        },
        description: {
          en: "Learn about our sacred temple",
          si: "අපගේ පූජනීය විහාරය ගැන දැනගන්න",
        },
      },
      {
        href: "/about/history",
        label: {
          en: "Temple History",
          si: "ඉතිහාසය",
        },
        description: {
          en: "Discover our rich heritage",
          si: "අපගේ පොහොසත් උරුමය සොයාගන්න",
        },
      },
      {
        href: "/about/vision-mission",
        label: {
          en: "Vision & Mission",
          si: "දැක්ම හා මෙහෙවර",
        },
        description: {
          en: "Our purpose and goals",
          si: "අපගේ අරමුණු සහ පරමාර්ථ",
        },
      },
      {
        href: "/about/chief-incumbent",
        label: {
          en: "Chief Incumbent",
          si: "ප්‍රධාන නාහිමිපාණෝ",
        },
        description: {
          en: "Meet our chief monk",
          si: "අපගේ ප්‍රධාන ස්වාමීන් වහන්සේ",
        },
      },
      {
        href: "/about/management",
        label: {
          en: "Temple Management",
          si: "විහාර කාරක සභාව",
        },
        description: {
          en: "Meet the temple committee",
          si: "විහාර කමිටුව හඳුනාගන්න",
        },
      },
    ],
  },
  {
    href: "/dhamma-school",
    label: {
      en: "Dhamma School",
      si: "ධර්ම පාසල",
    },
    children: [
      {
        href: "/dhamma-school",
        label: {
          en: "About Dhamma School",
          si: "ධර්ම පාසල ගැන",
        },
        description: {
          en: "Siri Dhammasiddhi Dhamma School",
          si: "සිරි ධම්මසිද්ධි ධර්ම පාසල",
        },
      },
      {
        href: "/dhamma-school/classes",
        label: {
          en: "Classes",
          si: "පන්ති",
        },
        description: {
          en: "View class schedules",
          si: "පන්ති කාලසටහන් බලන්න",
        },
      },
      {
        href: "/dhamma-school/teachers",
        label: {
          en: "Teachers",
          si: "ගුරුවරු",
        },
        description: {
          en: "Meet our dedicated teachers",
          si: "අපගේ කැපවූ ගුරුවරු හඳුනාගන්න",
        },
      },
      {
        href: "/dhamma-school/results",
        label: {
          en: "Exam Results",
          si: "විභාග ප්‍රතිඵල",
        },
        description: {
          en: "View student achievements",
          si: "ශිෂ්‍ය ජයග්‍රහණ බලන්න",
        },
      },
    ],
  },
  {
    href: "/youth-association",
    label: {
      en: "Youth",
      si: "තරුණ",
    },
    children: [
      {
        href: "/youth-association",
        label: {
          en: "About Kamituwa",
          si: "කාමිටුව ගැන",
        },
        description: {
          en: "Dahemi Tharuna Bauddha Kamituwa",
          si: "දැහැමි තරුණ බෞද්ධ කාමිටුව",
        },
      },
      {
        href: "/youth-association/projects",
        label: {
          en: "Projects",
          si: "ව්‍යාපෘති",
        },
        description: {
          en: "Community service projects",
          si: "සමාජ සේවා ව්‍යාපෘති",
        },
      },
      {
        href: "/youth-association/volunteer",
        label: {
          en: "Volunteer",
          si: "ස්වෙච්ඡා",
        },
        description: {
          en: "Join our volunteer program",
          si: "අපගේ ස්වෙච්ඡා වැඩසටහනට එකතු වන්න",
        },
      },
    ],
  },
  {
    href: "/events",
    label: {
      en: "Events",
      si: "වැඩසටහන්",
    },
  },
  {
    href: "/gallery",
    label: {
      en: "Gallery",
      si: "ඡායාරූප",
    },
  },
  {
    href: "/news",
    label: {
      en: "News",
      si: "ප්‍රවෘත්ති",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      si: "සම්බන්ධ",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// FOOTER NAVIGATION GROUPS
// ─────────────────────────────────────────────────────────────
export const footerNavGroups = [
  {
    title: { en: "Temple", si: "විහාරය" },
    links: [
      { href: "/about", label: { en: "About Us", si: "අපි ගැන" } },
      { href: "/about/history", label: { en: "History", si: "ඉතිහාසය" } },
      { href: "/contact", label: { en: "Contact", si: "සම්බන්ධ" } },
    ],
  },
  {
    title: { en: "Explore", si: "ගවේෂණය" },
    links: [
      { href: "/events", label: { en: "Events", si: "වැඩසටහන්" } },
      { href: "/gallery", label: { en: "Gallery", si: "ඡායාරූප" } },
      { href: "/news", label: { en: "News", si: "ප්‍රවෘත්ති" } },
    ],
  },
];