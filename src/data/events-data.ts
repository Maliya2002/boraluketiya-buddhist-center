// src/data/events-data.ts
// ═══════════════════════════════════════════════════════════════
// EVENTS DATA
// Upcoming and past events
// ═══════════════════════════════════════════════════════════════

export type EventCategory =
  | "poya"
  | "dhamma"
  | "community"
  | "school"
  | "youth"
  | "special";

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface EventData {
  id: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  category: EventCategory;
  status: EventStatus;
  date: string; // ISO date
  time: string;
  location: {
    en: string;
    si: string;
  };
  image: string;
  attendees?: number;
  maxAttendees?: number;
  isFeatured?: boolean;
  isFree?: boolean;
}

export const eventCategories = [
  { value: "all", label: { en: "All Events", si: "සියලු වැඩසටහන්" }, color: "#D4AF37" },
  { value: "poya", label: { en: "Poya Days", si: "පොහොය දින" }, color: "#F5E27B" },
  { value: "dhamma", label: { en: "Dhamma", si: "ධර්ම දේශනා" }, color: "#8B5E3C" },
  { value: "community", label: { en: "Community", si: "ප්‍රජාව" }, color: "#2AA82A" },
  { value: "school", label: { en: "School", si: "පාසල" }, color: "#4D7AFF" },
  { value: "youth", label: { en: "Youth", si: "තරුණ" }, color: "#FF8C1A" },
];

export const upcomingEvents: EventData[] = [
  {
    id: "vesak-2025",
    title: {
      en: "Vesak Poya Celebrations",
      si: "වෙසක් පොහොය සැමරුම්",
    },
    description: {
      en: "Grand celebration of Vesak Poya with religious observances, dhamma sermons, alms giving, and cultural performances throughout the day.",
      si: "වෙසක් පොහොය දිනයේ ආගමික වතාවත්, ධර්ම දේශනා, දන් දීම, සහ සංස්කෘතික ප්‍රසංග සමඟ දිනය පුරා විශාල සැමරුම්.",
    },
    category: "poya",
    status: "upcoming",
    date: "2025-05-11",
    time: "05:00 AM",
    location: {
      en: "Main Temple Grounds",
      si: "ප්‍රධාන විහාර භූමිය",
    },
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=85",
    attendees: 450,
    maxAttendees: 1000,
    isFeatured: true,
    isFree: true,
  },
  {
    id: "meditation-retreat",
    title: {
      en: "Weekend Meditation Retreat",
      si: "සති අන්ත භාවනා පිටිකඩ",
    },
    description: {
      en: "A peaceful weekend retreat for meditation practitioners of all levels. Learn mindfulness, breathing techniques, and Vipassana meditation.",
      si: "සියලුම මට්ටමේ භාවනා ප්‍රගුණකයන් සඳහා සාමකාමී සති අන්ත පිටිකඩක්. සති සම්පජඤ්ඤ, ආස්වාස ප්‍රස්වාස තාක්ෂණ, සහ විපස්සනා භාවනා ඉගෙන ගන්න.",
    },
    category: "dhamma",
    status: "upcoming",
    date: "2025-02-15",
    time: "06:00 AM",
    location: {
      en: "Meditation Hall",
      si: "භාවනා ශාලාව",
    },
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=85",
    attendees: 28,
    maxAttendees: 50,
    isFeatured: true,
    isFree: false,
  },
  {
    id: "dhamma-school-exam",
    title: {
      en: "Annual Dhamma School Examinations",
      si: "වාර්ෂික ධර්ම පාසල් විභාග",
    },
    description: {
      en: "Annual examinations for all Dhamma school students. Grade-wise examinations covering Buddhist studies, Pali, and Sinhala.",
      si: "සියලුම ධර්ම පාසල් ශිෂ්‍යයන් සඳහා වාර්ෂික විභාග. බෞද්ධ අධ්‍යයන, පාලි, සහ සිංහල භාෂාව ආවරණය කරන ශ්‍රේණි අනුව විභාග.",
    },
    category: "school",
    status: "upcoming",
    date: "2025-03-20",
    time: "08:00 AM",
    location: {
      en: "Siri Dhammasiddhi Dhamma School",
      si: "සිරි ධම්මසිද්ධි ධර්ම පාසල",
    },
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85",
    attendees: 320,
    maxAttendees: 500,
    isFree: true,
  },
  {
    id: "blood-donation",
    title: {
      en: "Blood Donation Campaign",
      si: "රුධිර දාන ව්‍යාපාරය",
    },
    description: {
      en: "Community blood donation campaign organized by Dahami Tharuna Bauddha Kamituwa. Free health checkups included.",
      si: "දැහැමි තරුණ බෞද්ධ කමිටුව විසින් සංවිධානය කරන ලද ප්‍රජා රුධිර දාන ව්‍යාපාරය. නොමිලේ සෞඛ්‍ය පරීක්ෂණ ඇතුළත්.",
    },
    category: "youth",
    status: "upcoming",
    date: "2025-04-05",
    time: "09:00 AM",
    location: {
      en: "Community Hall",
      si: "ප්‍රජා ශාලාව",
    },
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=85",
    attendees: 85,
    maxAttendees: 200,
    isFree: true,
  },
  {
    id: "dansal",
    title: {
      en: "Vesak Dansal (Free Food)",
      si: "වෙසක් දන්සල",
    },
    description: {
      en: "Traditional Vesak dansal serving free food to devotees and passersby. Community volunteers welcome to help serve.",
      si: "දේවනීන් සහ ගමන් යන අයට නොමිලේ ආහාර සපයන සම්ප්‍රදායික වෙසක් දන්සලක්. සේවා දීමට ප්‍රජා ස්වේච්ඡා සේවකයන් සාදරයෙන් පිළිගැනීම.",
    },
    category: "community",
    status: "upcoming",
    date: "2025-05-12",
    time: "11:00 AM",
    location: {
      en: "Temple Entrance",
      si: "විහාර පිවිසුම",
    },
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&q=85",
    attendees: 150,
    maxAttendees: 500,
    isFeatured: true,
    isFree: true,
  },
  {
    id: "tree-planting",
    title: {
      en: "Sacred Tree Planting Ceremony",
      si: "පවිත්‍ර වෘක්ෂ රෝපණ උත්සවය",
    },
    description: {
      en: "Environmental conservation initiative — planting sacred Bodhi tree saplings and native flora in the temple grounds.",
      si: "පරිසර සංරක්ෂණ මූලාරම්භය — විහාර භූමිවල පවිත්‍ර බෝධි වෘක්ෂ පැළ සහ ස්වදේශීය පැළෑටි රෝපණය කිරීම.",
    },
    category: "community",
    status: "upcoming",
    date: "2025-06-05",
    time: "07:00 AM",
    location: {
      en: "Temple Gardens",
      si: "විහාර උද්‍යාන",
    },
    image: "https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&q=85",
    attendees: 45,
    maxAttendees: 100,
    isFree: true,
  },
];