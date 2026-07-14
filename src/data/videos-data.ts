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
  duration: string;
  youtubeId?: string;
  category: "sermons" | "events" | "school" | "meditation";
  date: string;
  views?: number;
  featured?: boolean;
}

export const videosList: VideoData[] = [
  {
    id: "v1",
    title: {
      en: "Vesak Sermon 2024",
      si: "වෙසක් ධර්ම දේශනාව 2024",
    },
    description: {
      en: "Special Vesak day sermon by our Chief Incumbent",
      si: "අපගේ ප්‍රධාන නාහිමිපාණන් වහන්සේ විසින් විශේෂ වෙසක් ධර්ම දේශනාව",
    },
    thumbnail: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=85",
    duration: "45:32",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    category: "sermons",
    date: "2024-05-23",
    views: 12500,
    featured: true,
  },
  {
    id: "v2",
    title: {
      en: "Guided Meditation - Metta Bhavana",
      si: "මෛත්‍රී භාවනා මාර්ගෝපදේශනය",
    },
    description: {
      en: "20-minute loving-kindness meditation guidance",
      si: "විනාඩි 20ක මෛත්‍රී භාවනා මාර්ගෝපදේශනය",
    },
    thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=85",
    duration: "20:15",
    youtubeId: "dQw4w9WgXcQ",
    category: "meditation",
    date: "2024-11-10",
    views: 8300,
    featured: true,
  },
  {
    id: "v3",
    title: {
      en: "Dhamma School Annual Concert",
      si: "ධර්ම පාසල් වාර්ෂික ප්‍රසංගය",
    },
    description: {
      en: "Highlights from our annual cultural concert",
      si: "අපගේ වාර්ෂික සංස්කෘතික ප්‍රසංගයේ ප්‍රධාන අවස්ථා",
    },
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85",
    duration: "1:23:45",
    youtubeId: "dQw4w9WgXcQ",
    category: "events",
    date: "2024-10-15",
    views: 5200,
  },
  {
    id: "v4",
    title: {
      en: "Introduction to Buddhism",
      si: "බුදුදහම හැඳින්වීම",
    },
    description: {
      en: "Basic teachings for beginners",
      si: "ආරම්භකයන් සඳහා මූලික ඉගැන්වීම්",
    },
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=85",
    duration: "35:20",
    youtubeId: "dQw4w9WgXcQ",
    category: "sermons",
    date: "2024-09-05",
    views: 15600,
  },
  {
    id: "v5",
    title: {
      en: "Blood Donation Campaign",
      si: "රුධිර දාන ව්‍යාපාරය",
    },
    description: {
      en: "Community blood donation event coverage",
      si: "ප්‍රජා රුධිර දාන අවස්ථා ආවරණය",
    },
    thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=85",
    duration: "12:45",
    youtubeId: "dQw4w9WgXcQ",
    category: "events",
    date: "2024-08-20",
    views: 3200,
  },
  {
    id: "v6",
    title: {
      en: "Poya Day Bodhi Puja",
      si: "පොහොය දින බෝධි පූජාව",
    },
    description: {
      en: "Traditional Bodhi tree ceremony",
      si: "සම්ප්‍රදායික බෝධි පූජා උත්සවය",
    },
    thumbnail: "https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&q=85",
    duration: "1:45:30",
    youtubeId: "dQw4w9WgXcQ",
    category: "events",
    date: "2024-07-11",
    views: 9800,
  },
];