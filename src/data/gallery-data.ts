// src/data/gallery-data.ts
// ═══════════════════════════════════════════════════════════════
// GALLERY DATA
// Photo albums and images
// ═══════════════════════════════════════════════════════════════

export type GalleryCategory =
  | "all"
  | "temple"
  | "events"
  | "school"
  | "youth"
  | "nature";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: {
    en: string;
    si: string;
  };
  category: GalleryCategory;
  width: number;
  height: number;
  date?: string;
}

export const galleryCategories = [
  { value: "all", label: { en: "All Photos", si: "සියලු ඡායාරූප" } },
  { value: "temple", label: { en: "Temple", si: "විහාරය" } },
  { value: "events", label: { en: "Events", si: "වැඩසටහන්" } },
  { value: "school", label: { en: "Dhamma School", si: "ධර්ම පාසල" } },
  { value: "youth", label: { en: "Youth Activities", si: "තරුණ ක්‍රියාකාරකම්" } },
  { value: "nature", label: { en: "Nature", si: "සොභාදහම" } },
];

// Using Unsplash images with varying dimensions for masonry layout
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=85",
    alt: "Buddhist temple at sunset",
    title: {
      en: "Sacred Temple at Dusk",
      si: "සන්ධ්‍යාවේ පවිත්‍ර විහාරය",
    },
    category: "temple",
    width: 800,
    height: 1200,
    date: "2024-11-15",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&q=85",
    alt: "Buddha statue",
    title: {
      en: "Golden Buddha Statue",
      si: "රන්වන් බුදු පිළිමය",
    },
    category: "temple",
    width: 800,
    height: 800,
    date: "2024-10-20",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1531938716357-224c16b0286c?w=800&q=85",
    alt: "Temple architecture",
    title: {
      en: "Ancient Architecture",
      si: "පුරාණ ගෘහ නිර්මාණ ශිල්පය",
    },
    category: "temple",
    width: 800,
    height: 1000,
    date: "2024-09-10",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=85",
    alt: "Meditation session",
    title: {
      en: "Group Meditation",
      si: "සමූහ භාවනාව",
    },
    category: "events",
    width: 800,
    height: 600,
    date: "2024-12-01",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=85",
    alt: "Buddhist festival",
    title: {
      en: "Vesak Celebrations",
      si: "වෙසක් සැමරුම්",
    },
    category: "events",
    width: 800,
    height: 1100,
    date: "2024-05-23",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85",
    alt: "Students in class",
    title: {
      en: "Dhamma School Students",
      si: "ධර්ම පාසල් සිසුන්",
    },
    category: "school",
    width: 800,
    height: 900,
    date: "2024-08-15",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=85",
    alt: "Youth activity",
    title: {
      en: "Community Service",
      si: "ප්‍රජා සේවා",
    },
    category: "youth",
    width: 800,
    height: 700,
    date: "2024-07-20",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&q=85",
    alt: "Temple gardens",
    title: {
      en: "Peaceful Gardens",
      si: "සාමකාමී උද්‍යාන",
    },
    category: "nature",
    width: 800,
    height: 1000,
    date: "2024-06-10",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&q=85",
    alt: "Dansal preparation",
    title: {
      en: "Dansal Preparation",
      si: "දන්සල් සැකසීම",
    },
    category: "events",
    width: 800,
    height: 800,
    date: "2024-05-11",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=85",
    alt: "Lotus flowers",
    title: {
      en: "Sacred Lotus",
      si: "පවිත්‍ර නෙළුම්",
    },
    category: "nature",
    width: 800,
    height: 1200,
    date: "2024-04-05",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=800&q=85",
    alt: "Monk walking",
    title: {
      en: "Morning Alms Round",
      si: "උදෑසන පිඬු පිණිස",
    },
    category: "temple",
    width: 800,
    height: 900,
    date: "2024-03-20",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1571746054080-46e5b7e9c0e6?w=800&q=85",
    alt: "Prayer flags",
    title: {
      en: "Buddhist Prayer Flags",
      si: "බෞද්ධ ප්‍රාර්ථනා කොඩි",
    },
    category: "temple",
    width: 800,
    height: 600,
    date: "2024-02-14",
  },
];