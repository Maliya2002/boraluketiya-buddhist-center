// src/data/testimonials-data.ts
// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS DATA
// Community member testimonials and reviews
// ═══════════════════════════════════════════════════════════════

export interface Testimonial {
  id: string;
  name: string;
  role: {
    en: string;
    si: string;
  };
  quote: {
    en: string;
    si: string;
  };
  avatar?: string;
  rating: number;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nimal Perera",
    role: {
      en: "Dhamma School Parent",
      si: "ධර්ම පාසල් දෙමාපිය",
    },
    quote: {
      en: "This temple has been a spiritual home for our family for generations. The teachings my children receive here are invaluable.",
      si: "මෙම විහාරය අපගේ පවුලට පරම්පරා ගණනාවක් තිස්සේ ආධ්‍යාත්මික නිවහනක් වී තිබේ. මගේ දරුවන් මෙහිදී ලබන ඉගැන්වීම් අගණේ ය.",
    },
    rating: 5,
    date: "2024-12-15",
  },
  {
    id: "t2",
    name: "Kumari Silva",
    role: {
      en: "Meditation Practitioner",
      si: "භාවනා ප්‍රගුණකයා",
    },
    quote: {
      en: "The weekly meditation sessions have transformed my life. I've found inner peace and clarity I never thought possible.",
      si: "සතිපතා භාවනා සැසි මගේ ජීවිතය පරිවර්තනය කර ඇත. මට කිසිදා නොහැකි යැයි සිතූ අභ්‍යන්තර සාමය සහ පැහැදිලිකම මට හමු වී ඇත.",
    },
    rating: 5,
    date: "2024-11-20",
  },
  {
    id: "t3",
    name: "Rohan Fernando",
    role: {
      en: "Youth Association Member",
      si: "තරුණ සංගම් සාමාජික",
    },
    quote: {
      en: "Being part of Dahami Tharuna Bauddha Kamituwa has taught me the importance of community service and Buddhist values.",
      si: "දැහැමි තරුණ බෞද්ධ කමිටුවේ කොටසක් වීම මට ප්‍රජා සේවයේ සහ බෞද්ධ වටිනාකම්වල වැදගත්කම ඉගැන්වීය.",
    },
    rating: 5,
    date: "2024-10-05",
  },
  {
    id: "t4",
    name: "Sunitha Jayasinghe",
    role: {
      en: "Volunteer",
      si: "ස්වේච්ඡා සේවක",
    },
    quote: {
      en: "The temple's community service programs, especially blood donation and Dansal, bring people together beautifully.",
      si: "විහාරයේ ප්‍රජා සේවා වැඩසටහන්, විශේෂයෙන් රුධිර දාන සහ දන්සල, මිනිසුන් ලස්සනට එක්සත් කරයි.",
    },
    rating: 5,
    date: "2024-09-12",
  },
  {
    id: "t5",
    name: "Ajith Bandara",
    role: {
      en: "Regular Devotee",
      si: "නිතර පැමිණෙන දේවනියා",
    },
    quote: {
      en: "Every Poya day at this temple is a beautiful experience. The atmosphere of devotion is truly special.",
      si: "මෙම විහාරයේ සෑම පොහොය දිනයක්ම ලස්සන අත්දැකීමකි. දේවත්වයේ වායුගෝලය සැබවින්ම විශේෂයි.",
    },
    rating: 5,
    date: "2024-08-30",
  },
];

export const googleReviewsStats = {
  averageRating: 4.9,
  totalReviews: 234,
  breakdown: {
    5: 210,
    4: 18,
    3: 4,
    2: 1,
    1: 1,
  },
};