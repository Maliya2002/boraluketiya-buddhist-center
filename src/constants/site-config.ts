// src/constants/site-config.ts
// ═══════════════════════════════════════════════════════════════
// SITE CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export interface Organization {
  name: string;
  nameSinhala: string;
  description: string;
  color: string;
}

export const siteConfig = {
  // ✅ CORRECTED: Boralukatiya (බොරලුකැටිය)
  name: "Boralukatiya Buddhist Center",
  shortName: "BBC",
  tagline: "A Sacred Path to Enlightenment",
  nameSinhala: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය",
  description:
    "Boralukatiya Buddhist Center — A sanctuary of peace, wisdom, and compassion in Kamburupitiya, Sri Lanka.",
  keywords: [
    "Boralukatiya Buddhist Center",
    "Buddhist temple Sri Lanka",
    "Kamburupitiya temple",
    "Siri Dhammasiddhi Dhamma School",
    "Dahami Tharuna Bauddha Kamituwa",
    "බොරලුකැටිය",
    "දැහැමි තරුණ බෞද්ධ කමිටුව",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://boralukatiya.lk",

  location: {
    address: "Boralukatiya, Kamburupitiya, Sri Lanka",
    addressSinhala: "බොරලුකැටිය, කඹුරුපිටිය, ශ්‍රී ලංකාව",
    plusCode: "3HJJ+35",
    coordinates: { lat: 6.0397, lng: 80.5539 },
    city: "Kamburupitiya",
    country: "LK",
  },

  contact: {
    phone: "+94 XX XXX XXXX",
    whatsapp: "+94XXXXXXXXX",
    email: "info@boralukatiya.lk",
  },

  social: {
    facebook: "https://facebook.com/boralukatiyabuddhistcenter",
    youtube: "https://youtube.com/@boralukatiya",
    instagram: "https://instagram.com/boralukatiya",
    whatsapp: "https://wa.me/94XXXXXXXXX",
  },

  organizations: {
    temple: {
      // ✅ CORRECTED
      name: "Boralukatiya Buddhist Center",
      nameSinhala: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය",
      description: "The main Buddhist temple and meditation center.",
      color: "#D4AF37",
    },
    dhammaSchool: {
      name: "Siri Dhammasiddhi Dhamma School",
      nameSinhala: "සිරි ධම්මසිද්ධි ධර්ම පාසල",
      description: "A premier Buddhist education institution.",
      color: "#8B5E3C",
    },
    youthAssociation: {
      name: "Dahami Tharuna Bauddha Kamituwa",
      nameSinhala: "දැහැමි තරුණ බෞද්ධ කමිටුව",
      description: "The youth Buddhist association.",
      color: "#2AA82A",
    },
  } as Record<string, Organization>,

  ogImage: "/images/og/og-default.jpg",
} as const;

export type SiteConfig = typeof siteConfig;