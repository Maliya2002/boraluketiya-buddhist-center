// src/data/news-data.ts
// ═══════════════════════════════════════════════════════════════
// NEWS ARTICLES DATA
// ═══════════════════════════════════════════════════════════════

export type NewsCategory =
  | "announcement"
  | "event"
  | "dhamma"
  | "achievement"
  | "notice";

export interface NewsArticle {
  id: string;
  slug: string;
  title: {
    en: string;
    si: string;
  };
  excerpt: {
    en: string;
    si: string;
  };
  category: NewsCategory;
  image: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "vesak-2025-preparations",
    title: {
      en: "Vesak 2025 Preparations Begin at the Temple",
      si: "විහාරයේ 2025 වෙසක් සූදානම් ආරම්භ",
    },
    excerpt: {
      en: "Grand preparations for Vesak 2025 have begun with community-wide participation in decorating the temple grounds and preparing traditional programs.",
      si: "විහාර භූමිය සැරසීම සහ සම්ප්‍රදායික වැඩසටහන් සකස් කිරීමේ ප්‍රජා සහභාගීත්වය සමඟ 2025 වෙසක් විශාල සූදානම් ආරම්භ වී ඇත.",
    },
    category: "announcement",
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=85",
    author: "Temple Committee",
    publishedAt: "2025-01-15",
    readingTime: 3,
    featured: true,
  },
  {
    id: "2",
    slug: "dhamma-school-scholarship-program",
    title: {
      en: "New Scholarship Program for Dhamma Students",
      si: "ධර්ම ශිෂ්‍යයන් සඳහා නව ශිෂ්‍යත්ව වැඩසටහන",
    },
    excerpt: {
      en: "The Siri Dhammasiddhi Dhamma School announces a new scholarship program to support underprivileged students in continuing their Buddhist education.",
      si: "බෞද්ධ අධ්‍යාපනය දිගටම කරගෙන යාමට අඩු ආදායම්ලාභී ශිෂ්‍යයන් සහාය දැක්වීම සඳහා නව ශිෂ්‍යත්ව වැඩසටහනක් සිරි ධම්මසිද්ධි ධර්ම පාසල නිවේදනය කරයි.",
    },
    category: "announcement",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85",
    author: "Dhamma School",
    publishedAt: "2025-01-10",
    readingTime: 4,
    featured: true,
  },
  {
    id: "3",
    slug: "youth-community-service-milestone",
    title: {
      en: "Youth Association Reaches 1000 Volunteer Hours",
      si: "තරුණ සංගමය ස්වේච්ඡා පැය 1000 ලබයි",
    },
    excerpt: {
      en: "Dahami Tharuna Bauddha Kamituwa celebrates reaching 1000 hours of community service through various charitable projects this year.",
      si: "දැහැමි තරුණ බෞද්ධ කමිටුව මෙම වසරේ විවිධ පුණ්‍යායතන ව්‍යාපෘති හරහා ප්‍රජා සේවාවේ පැය 1000 ලබා ගැනීම සැමරෙයි.",
    },
    category: "achievement",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=85",
    author: "Youth Association",
    publishedAt: "2025-01-05",
    readingTime: 5,
  },
  {
    id: "4",
    slug: "meditation-hall-renovation",
    title: {
      en: "Meditation Hall Renovation Complete",
      si: "භාවනා ශාලා ප්‍රතිසංස්කරණ අවසන්",
    },
    excerpt: {
      en: "The renovated meditation hall is now open to devotees with improved acoustics, lighting, and comfortable seating for extended sessions.",
      si: "දිගු කාලීන සැසි සඳහා වැඩිදියුණු කළ ශබ්ද, ආලෝකකරණය සහ පහසු ආසන සමඟින් ප්‍රතිසංස්කරණය කරන ලද භාවනා ශාලාව දැන් දේවනීන්ට විවෘත ය.",
    },
    category: "notice",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=85",
    author: "Temple Committee",
    publishedAt: "2024-12-28",
    readingTime: 2,
  },
];