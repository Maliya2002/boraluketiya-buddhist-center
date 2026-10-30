// src/data/videos-data.ts
// ═══════════════════════════════════════════════════════════════
// VIDEOS DATA
// Video sermons, events, and educational content
// ═══════════════════════════════════════════════════════════════

export interface VideoData {
  id: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  thumbnail: string;
  duration?: string;
  youtubeId?: string;
  category: "sermons" | "events" | "school" | "meditation";
  date?: string;
  views?: number;
  featured?: boolean;
}

// Publish only recordings confirmed by the temple, with their actual metadata.
export const videosList: VideoData[] = [
  {
    id: "kathnoruwe-siridhamma-sermon",
    title: {
      en: "Dhamma Sermon — Ven. Kathnoruwe Siridhamma Thero",
      si: "පූජ්‍ය කත්නෝරුවේ සිරිධම්ම හිමියන්ගේ ධර්ම දේශනාව",
    },
    description: {
      en: "A Dhamma sermon organised by Boralukatiya Buddhist Center.",
      si: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය විසින් සංවිධානය කළ ධර්ම දේශනාවකි.",
    },
    thumbnail: "https://i.ytimg.com/vi/-7y6JDv4xvc/hqdefault.jpg",
    youtubeId: "-7y6JDv4xvc",
    date: "2026-07-31",
    category: "sermons",
    featured: true,
  },
];
