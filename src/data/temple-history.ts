// src/data/temple-history.ts
// ═══════════════════════════════════════════════════════════════
// TEMPLE HISTORY TIMELINE
// ═══════════════════════════════════════════════════════════════

export interface TimelineEvent {
  year: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  icon: string;
  highlight?: boolean;
}

export const templeHistory: TimelineEvent[] = [
  {
    year: "1920",
    title: {
      en: "Sacred Foundation",
      si: "පවිත්‍ර ආරම්භය",
    },
    description: {
      // ✅ CORRECTED: Boralukatiya (බොරලුකැටිය)
      en: "The Boralukatiya Buddhist Center was founded in the peaceful lands of Kamburupitiya, beginning a century-long journey of spiritual service.",
      si: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය කඹුරුපිටියේ සාමකාමී භූමිවල පිහිටුවන ලද අතර, ශතවර්ෂයක ආධ්‍යාත්මික සේවා ගමනක් ආරම්භ විය.",
    },
    icon: "🏛️",
    highlight: true,
  },
  {
    year: "1950",
    title: {
      en: "First Dhamma School",
      si: "පළමු ධර්ම පාසල",
    },
    description: {
      en: "Established the first Dhamma school to educate the youth in Buddhist teachings and cultural values.",
      si: "බෞද්ධ ඉගැන්වීම් සහ සංස්කෘතික වටිනාකම් තුළ තරුණයින් අධ්‍යාපනය කිරීම සඳහා පළමු ධර්ම පාසල ස්ථාපිත කරන ලදී.",
    },
    icon: "📚",
  },
  {
    year: "2025",
    title: {
      en: "Youth Association Formed",
      si: "තරුණ සංගමය පිහිටුවීම",
    },
    description: {
      en: "Dahami Tharuna Bauddha Kamituwa was established to engage youth in community service and Buddhist activities.",
      si: "දැහැමි තරුණ බෞද්ධ කමිටුව සමාජ සේවා සහ බෞද්ධ ක්‍රියාකාරකම් සඳහා තරුණයන් සම්බන්ධ කිරීමට පිහිටුවන ලදී.",
    },
    icon: "👥",
  },
  {
    year: "2000",
    title: {
      en: "Modern Renovation",
      si: "නවීන ප්‍රතිසංස්කරණය",
    },
    description: {
      en: "Major renovation preserving ancient architecture while adding modern facilities for expanding community.",
      si: "පුරාණ ගෘහ නිර්මාණ ශිල්පය සුරක්ෂිත කරමින් පුළුල් වන ප්‍රජාව සඳහා නවීන පහසුකම් එකතු කරමින් ප්‍රධාන ප්‍රතිසංස්කරණය.",
    },
    icon: "🏗️",
  },
  {
    year: "2024",
    title: {
      en: "Digital Era",
      si: "ඩිජිටල් යුගය",
    },
    description: {
      en: "Embracing technology with online sermons, digital library, and this modern website to reach devotees worldwide.",
      si: "සම්පූර්ණ ලෝකයේ දේවනියන්ට ළඟාවීමට ඔන්ලයින් දේශනා, ඩිජිටල් පුස්තකාලය සහ මෙම නවීන වෙබ් අඩවිය සමඟ තාක්ෂණය වැළඳගැනීම.",
    },
    icon: "🌐",
    highlight: true,
  },
];