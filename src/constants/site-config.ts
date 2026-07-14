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
    "බොරලුකැටිය පිරිවෙන්",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://boralukatiya.lk",

  // ✅ UPDATED WITH REAL LOCATION DATA
  location: {
    address: "Boralukatiya, Kamburupitiya, Sri Lanka",
    addressSinhala: "බොරලුකැටිය, කඹුරුපිටිය, ශ්‍රී ලංකාව",
    plusCode: "3HJJ+35 Kamburupitiya",
    coordinates: {
      lat: 6.0850,
      lng: 80.5622,
    },
    city: "Kamburupitiya",
    country: "LK",
    district: "Matara",
    province: "Southern Province",
    // Google Maps URLs
    googleMapsUrl: "https://maps.app.goo.gl/sYP46mL83cZ6uhy97",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d80.5622!3d6.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBoralukatiya%20Pirivena!5e0!3m2!1sen!2slk!4v1700000000000",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=6.0850,80.5622",
  },

  contact: {
    phone: "+94 41 XXX XXXX",
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
      name: "Boralukatiya Buddhist Center",
      nameSinhala: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය",
      description: "The main Buddhist temple and meditation center in Kamburupitiya.",
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